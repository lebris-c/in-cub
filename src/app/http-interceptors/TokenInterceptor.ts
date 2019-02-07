import { Component, OnInit, Injectable } from "@angular/core";

import { DecimalPipe } from "@angular/common";

import { Observable } from "rxjs";
import {
  HttpClient,
  HttpResponse,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (
      req.url.includes("http://localhost:3000/consultant") ||
      req.url.includes("http://localhost:3000/startup")
    ) {
      // on doit ajouter un token d'authentification OAUTH
      // on es obligé de clonner l’objet requete car c’est immuable
      const idToken = localStorage.getItem("token");
      if (idToken) {
        const clone = req.clone({
          setHeaders: {
            Authorization: `Bearer ` + idToken
          }
        });
        return next.handle(clone);
      } else {
        return next.handle(req);
      }
    }
    // si ce n'est pas une requête à l'API github
    return next.handle(req);
  }
}
