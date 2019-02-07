import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./TokenInterceptor";

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
];
