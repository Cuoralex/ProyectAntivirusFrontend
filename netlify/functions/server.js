var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// netlify/functions/server.ts
import { createRequestHandler } from "@netlify/remix-adapter";
import { useState, useEffect } from "react";

// build/server/index.js
var server_exports = {};
__export(server_exports, {
  assets: () => serverManifest,
  assetsBuildDirectory: () => assetsBuildDirectory,
  basename: () => basename,
  entry: () => entry,
  future: () => future,
  isSpaMode: () => isSpaMode,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, createCookie, json, redirect } from "@remix-run/node";
import { RemixServer, useMatches, Link as Link$1, Outlet, useNavigate as useNavigate$1, useLocation, Meta, Links, ScrollRestoration, Scripts, useRouteError, isRouteErrorResponse, useSearchParams, useActionData, Form, useLoaderData } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
import { X, Menu, Home, Sun, Moon, LogOut, Users, Briefcase, Building, Layers, ClipboardList, FolderCog, Network, Plus, Pencil, Trash2, Star, BarChart2, Settings } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { create } from "zustand";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as LabelPrimitive from "@radix-ui/react-label";
import PropTypes from "prop-types";
import { Switch } from "@headlessui/react";
import { Carousel } from "react-responsive-carousel";


var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let acceptHeader = request.headers.get("Accept");
  return acceptHeader?.includes("application/json") ? handleJsonRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleJsonRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: 5e3
        }
      ),
      {
        async onShellReady() {
          shellRendered = !0;
          try {
            if (responseStatusCode === 409) {
              responseHeaders.set("Content-Type", "application/json"), resolve(
                new Response(
                  JSON.stringify({ error: "El correo ya est\xE1 registrado." }),
                  {
                    headers: responseHeaders,
                    status: 409
                  }
                )
              );
              return;
            }
            let responseBody = await request.text().catch(() => null);
            if (responseStatusCode >= 400) {
              responseHeaders.set("Content-Type", "application/json"), resolve(
                new Response(
                  responseBody || JSON.stringify({ error: `Error ${responseStatusCode}` }),
                  {
                    headers: responseHeaders,
                    status: responseStatusCode
                  }
                )
              );
              return;
            }
          } catch (error) {
            console.error("Error al procesar la respuesta JSON:", error);
          }
          resolve(
            new Response(null, {
              headers: responseHeaders,
              status: responseStatusCode || 200
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error("Error en la solicitud JSON:", error), shellRendered && (responseHeaders.set("Content-Type", "application/json"), resolve(
            new Response(
              JSON.stringify({ error: "Error inesperado en el servidor" }),
              {
                headers: responseHeaders,
                status: 500
              }
            )
          ));
        }
      }
    );
    setTimeout(abort, 5e3);
  });
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
var entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" })), IconWompi = "data:image/png;base64,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", IconHeartWhite = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB5Va9ixpBFJ91o5JccjGSyxUBIRyEcKn9M65ISksLOztB7GwCAcFOwSYYsUhAbAL5DwSLCLEIxkYCWlzOjxCNH/sxu3lvMiOT6N6tH1eE+8Gs67x5v9+8mTdvlpCbDGXPfY4GFZoFzU6lUkedTudEURQzGAx+zefzv7jd5s0DjSYSiYNut3uKtlAo9C2TyZxzbmYnl8CHj2q1+nQ+n7fsv0H7/f67dDrt4WRKLBbzjkaj92Az5IGz2axVqVSecU6vkxjOnIzH4zN0MgzDQggS0zQpNHzVyuXyYaFQuI/clFJmE+PABboo85tOp2cy98ryFovFExyo67pprwfVNA3Jz6FdwDsS03UDYcIs6lKp9ISs2TrWMZlMPuOMrwB1eF8BRG7B8n6SNZaIRCIPkEAsx56AEzKj0eg9oeMRL4PB4Bj/AxxTegsgv9rr9R7LHQxer1cn1wS/36+tCIbDYTw7Oq4D2R/wPJuBQODiXwNbRkhjN0njGnisIBGbsoaIkEXVaDRewx6Kme0cHVQopdlsvpI15ARBJczQH3AOD30+n4fsAMx2VVVHoHkkuIXIckb4aLfbL1EMVsMkWwJ9QcxTq9Ve8C7HvLiFD6ggH3AvsUzZm4NikYFa/FHmvAys7oFjH5aWEWwgZmENht/vMtdVYNdKNpu9DY7GYrGwXIpaMEFWWeBGuUP+bJfrIsL2FvbgETK5ELV4Ubfr9fqxzLEJmAMk0UOMFAuxgyjlNgPHcl9XS7kOzDGXy90Fwp+YDJBI8mUrbqEJXEMHss8uWO4FEH8RKhCVzu/nlvQVsLOYwJJsOBy+EeHB58VbblfJFnvmBuxMJZPJ5/F4/FTq2+eVtgI5kmsV+j/xG3pFmwbIE2NwAAAAAElFTkSuQmCC";
function ButtonDonateWompi() {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      id: "button-donate-wompi",
      className: `bg-[#FFBA08] text-white fixed bottom-5 right-5 md:bottom-10 md:right-10 \r
                 flex items-center gap-2 sm:gap-4 rounded-full p-2 sm:p-3 md:p-4 shadow-lg z-50`,
      onClick: () => window.open("https://checkout.wompi.co/l/FRfRVa", "_blank"),
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: IconWompi,
            alt: "\xCDcono Wompi",
            className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          }
        ),
        /* @__PURE__ */ jsxs("div", {
          className: "flex items-center",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-lg font-bold", children: "Donar" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: IconHeartWhite,
                alt: "\xCDcono Coraz\xF3n Donar",
                className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ml-1"
              }
            )
          ]
        })
      ]
    }
  );
}
var IconGoUp = "data:image/png;base64,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";
function ButtonGoUp() {
  return /* @__PURE__ */ jsx(
    "button",
    {
      id: "button-go-up",
      className: "fixed left-5 bottom-5",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      children: /* @__PURE__ */ jsx("img", { src: IconGoUp, alt: "Go Up", className: "w-[55px] h-[55px]" })
    }
  );
}
var Logo = "/assets/logo-fundacion-antivirus-DB5pcOyF.png", IconWhatsApp = "data:image/png;base64,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", IconInstagram = "data:image/png;base64,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", IconYouTube = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgB7VlNTGNVFL7v9Y9SWhgMfzqUBkn4M0YXCiUR2apxZyYSFoyJYSfGuFQIiXFBUBNhY2JckSCBlcmYuCREGGBBYlREkoHOgJTw05IayrT0vTff6bw7eXR4MJ25LY9Jv+T29t37fs53z7n3nnsOYwUUUEABzwMklj3oGe2sjr6+PkcqlSoKh8NFdrvdnUwmnZIk2TRNs6NOoVacTmcS9xzj9kRbW1t8aGgole13zhPsiYXu6uqy7+3tFY2Pj79weHjYdHJyUo860N7eHvD7/TW4hUoZigfFgWLL+Aa9T0FJohChKEo4FAqFFxcXQ6WlpXddLtcdn8/3T09PT7S7u/sIZNWL5DJ2mLVpo6OjLo/H80ZDQ8PbnZ2dr2JEmzG6dQ6Hw6ML+gjoY9AGyxYmz6loj8myfA9ldXZ29s+VlZXfUW6PjY0ljDKe9266SaY/u7u7H0DwsKYDJqNdBjK+u31wcHBDl1VmF0yTdCdMZ5ieVBSFKlWzAFRV5fJokO8bo7ymRGKx2Ef0AB60BIlMKDojyHnzPELS8PCwF/dF+QhYFZzPyMiIx0hGNpDRMMnfQV2GSacyC0OXz4tV9F1mWASMZNjW1lbwrHYLIi3fzs5O8LFGDqiujF0hwNyuGa8zyWS1456BvJonvIpT8go1J2x0MsZj29D0rIOTFYSSoZ18cHDw042NjddweQ9mIOnazovGhE/0eDzuq6+v/wMmUAcen6M+woZH38m5loSTsdkeuWwyfLjvJiYm/HBJfsK1RH4YyyGpXC7BZFoyeb9ut/vj/f39JpjhErQlQVO8XyhyvZ9wgeWKiop/YXJt8Kvex6a3RaYHYtQvTFP52hxJ6LRHXl5efguk/JhbX6JO0iLBBGkpnzs9X9VIeMnr9X69tLR0HRqaJHeLCdDQZbgtnJQNx+YDHKO7QeYT9nRH+FO4DDKSXpT5+flyrHQ/w9zG2BXTDD/FalNTU3IkEvkiGAxug8iHFPRgAjST/aH96UAk0isXIjfvVVdX/wDTuk7eAZZrjQka1Fxrhp/TVbg4TZB9sbKy8hbql8hJROEmJ+xjuUKaxMLCghfz4sdAIPA3PIA36WAlmgSHcDPDvpGuaaeH8J/BjL7C8luMJlUPKeVsAIWTQQAvhqDe6/j7C7RQi1pDTV05X2yEkiFHcmBg4HtYUTUuJZ2EcHMyg1AyMCNasV5kl4RTqtcnprD35RuZZA7ZFQLOTlHj9SkyNTU1t/W/lo6bMV2+qqqqBWOjkYy0vr7+K+r/9WOuZaHLF4Fv9xszC8/STzQa5bFmS8ZouVyQ86ZRblNCVs0CUCGAyLcXEeGdaROjPAie+4+/zCL5mR3kjW4YZJUe08RZ2mEPXXUntBRsbGx8C0H1V5D2a0a7H1EXH8tYPMiNMURmnhgmmTMFJI6w6W6gb3VmZuavtbW1uUQiMd/f32+aOcsqp4n8ojw9PV08OTl5DSPUDEFehsoDHR0ddbW1tbRZ8pymG8XFzs9pxpme09zc3AzPzc2FEB+4C+HvILe52tvbG2lpaTnG95SL5DJ2ZAvTl4GsfXl52Q0NFmEUi6FBBx288N+OxGuKMs7oO0HzcUlJyXFra+t9kdnmAgoooIDnAw8Anh4yolfegOIAAAAASUVORK5CYII=", IconTikTok = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASuSURBVHgB7VlbSBxXGD4zq1utlbTewBsUVqqpprQSqBBZfGmhrYoPtdKCwlKhSB/SPpQ2DwWVPJigPkgC5sFg8pJEA4oxEhOIgYAPAclDjNkoXpAYvJFNgsb1sjv5/vHMZrK6687OOLuQ/WA5c2Znzvm/c77//P85w1gMMcTwwUFk0YGgdggHvOgdGBgonJiY+EGSJIsgCBIzCQJ1JkmeoqKim+Xl5U8Ue7S0ITPf3t4+JUUByA61XSFjcHDwKDXgBaQIQum/v7//y6Ajvh/Gx8d/opKmlUUQSv9Op/PHQM+IQV62MOPghST23NzZ2fGwEIHJCGhPXJD3NDnRARDj4+NdnZ2dpxYWFsTNzc31yspKe2lp6e8hNyCKAe0JRsJovGxoaLigVCoqKu6gcLDdFVKXZM2MA2JPT48iCcFuty9ubW05IRPdPmdqMOvt7VUuKd5I8DsH+S2tQEwHIhmRRavV+mBtbe0k9C5iRuheWME0kiRo9MXk5OQOl8tViRlZRV3gk6I9MpuE/UZZJpKSknLD4XDkLi4u1ng8ng6t8jKVRGFhoUJE9HNoobu7252ZmdkDiZ10u92vmAZESk6UWP6BeHGM+UkHRK0gqMmuQyXBndVXVVfm5uY+I8fGM0dV/8mzozVbNoQET9SU6jp+j4C7MOZNoHfi4uJIMgn4TSwvL1+amZn5qqqq6kh2dna8VruMiNiUZdIq+Wx0dPSvvr6+W62trUSEyD1F8cV+L1ksvlTIm56eXpeWllaHd+k9N5z7CNMAvSS8XL9Xmpqa6hobG3cYl0R1dbUlxPblUefJahL9VARDgi4SkBCtMlchjd/YrvG+3ReiM2Wo6izVyITyPYRNQtrV0HOM4K/snYZlh2xubj4BYiSjT5kJCJsEdCtgPf+bV2XjR0ZGksrKyu7j8muqY79ADiwHNHaICLtxGLfe1tY2zN6l0RIIjMJwIiDxZ3T1EbItLHxMwpFfK5WhoaETKI7BKYmAqVtaPaP0XmowOTn5DZWh7slXV1eZUdBDIkldSU1NneeXe6Itj9wvMXO+FaqmpiaZGQQ9JD5HLLAyLp3p6enbKF5g2aW6j4jEGaysrJzht+TnbTbbcXJ8I6CHRHp7e7vixAJG2Y0Njh3L7haMkw2lVITkhW1oa0ZGxnXen1BbW5uE299xx9eNsEnQAOfk5HSoblmwwXnc1dWViU3OaRx93sH+4CKC3vGEhIR/VH15W1paGkCQUgtDAmDYQ4GRJAO+xRHMn0jazjM+I/X19S6U//s/zkvv/Py8LSsr6yxJiRIuZgD0NCLSDgwGnVtaWqplu6O63/LqIzA1NWXLzc19SDKDlAw7nNY1EjSSRAR6vwx5XcNRYxbbKxFpdnb2I5wA/puXl+dEpP+EzgWYgbFEt2dxSXhh3C/5+fk/b2xsPED9HuS2AH4f47okMTHxe5CUl2SeoRoaDIOR0DJLIjdOhBOXoCzxf0DvuTRlzIH+C/gHRi7kw16TEDCoBCRRUFAwRKXkt1E2G0r/xcXFN5lGKF+K/pOiALQoqO3yx4Hf7IaHhwvGxsbK6XtFsOP1QwDtGnV9s/M1xKID0WJHDDHEYBbeAoP1Zpu/rxRxAAAAAElFTkSuQmCC", IconLinkedIn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAwCAYAAACxKzLDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ7SURBVHgB7Vk9TBNhGH7v+oMUKA3YONCI0QAqAyGRzSgMQiCGjcSEzYGJiAObgzCZCA6ViUijMwvBwRDi5kKEhAGBFBIHICCh4d9S6c/5vNcWrk3hyl3pQXJPcrne973fd+9z3/e9fyUyYcKEiRxBpKuBrPQQspCx4IqurKzcm56e7sFvFz9TniBJklUUxe3a2lpvTU3N76Q+pBdHR0eNmDwqGQzWg3KBjo4OC+bbiEaN5RSJRPi22dXVZVPTWXWP+v3+ckx2C1uAjITFYqFYLObGEXCpyWarqURXBMXFxaoyqqTwhXjZz+qOKR8Sgpf5AaTDw0NVIc17CvozITEYDI6sr6+3bGxsvBEEIXp8fJyNRb1UWEk7mFBXUVHRp8Tz5NLS0lhVVdUvirsKw8hpXimsyubAwICPTpUXq6urF7FS38lAQrIipB3hvr4+5fmRf2PP75PB0EPKMzEx0UhxMrwy0sHBgbusrOw5GWwtNZOCM461tLRM7u/vv+zu7r4zNzf3DOZ2Dk7yBhm8/TQbCnaGPB6Gwjc0NCSvFgiR1WqVreI5Q2VZOFJKOnT2BDijJ32kE5pJQRF+eQiKnfgqECIYCofdbue7hPuRcghI2/ExrEwA45bhCha3traEurq6CvTfB1EH+mK4Ljd8qa+vd0fPCPz29vbampubixCPlba3t5eMjY25uDnZPTw8fLOzs9PJ/a2trQVwAR/QHpydnW1Ifw9izOJQKPSeB4JcxvexHqwP6cV5pHZ2dp4qZUdHR+1o3k2SgnW8oexH2+uenp6axGO6L5NXB9bzHUhJekjpWmZsk5TtC0MhnDO/2N/f/9Hr9fopYS0p9QzxNhYGBwffYl5dbiGfoXcs6dempqZKxsfHH/F2pTixEz0gc7y6uvqNdEBPmHRRyKuD7dUJi/kl8e7w/Pz8Y2S1PxMyMumCgoIfuL0gjcjnSkk+n68EhEYonpKzr7N5PJ7P6YKFhYWrbPK1Iq+Z3/b29kPcTpwzpzVOp9MzMzOTks0uLy//1ZOU5pUUfJczrUkmh2jEomzs7e3VVVjJd46e6QwL2JIpVrOiokJXVJFXUux/MrW73e6cBsBXpUiZU5ikrgtMUulAqhFQPre1tf2j07JZFCFPME1+M8M00aamppCyAeXlLdKjF2kH50tfUcE9tNlsYjgcpvJyLuZKpZwv8X1tbc0PBWOcUHKm7HK5nIqEMD6JJDkDgcACHLPA+RjLORyOEtKRMOqK/UDmNipIKW2KwqcIf1OdYVi6siI+xgNc6fNISvIXger2w5cTzpg8c2NC9hyFhEzyGeYR1MaehWzLzoZXXZNAsKuqiyopBJa7uAJ6ouZcIFGo+YPyQYByAdTzGiXjEYExepKNvln/PQord3dhYeEVzhifaD5o+SpY8v7faWho8FZWVvLfo2zcIpQDXKs/sk2YMGFCFf8BBlGiUBvdSSwAAAAASUVORK5CYII=";
function FooterGeneral() {
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      id: "footer-general",
      className: "min-h-[380px] bg-[#232E55] text-white px-[40px] lg:px-[150px] py-[20px] lg:py-[50px]",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col lg:flex-row flex-wrap items-center justify-between gap-y-[20px]",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col lg:flex-row items-center lg:gap-[86px]",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: Logo,
                    alt: "Logo Fundaci\xF3n Antivirus",
                    className: "w-[150px] h-[150px] object-contain"
                  }
                ),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-col mt-[15px]",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[20px] font-bold mb-[20px] text-white", children: "Vis\xEDtanos" }),
                    /* @__PURE__ */ jsxs("p", {
                      className: "text-white",
                      children: [
                        "Calle 79 Sur # 50-165 ",
                        /* @__PURE__ */ jsx("br", {}),
                        "Oficinas 301 y 401 ",
                        /* @__PURE__ */ jsx("br", {}),
                        "La Estrella - Antioquia - Colombia"
                      ]
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col text-center mt-[15px]",
              children: [
                /* @__PURE__ */ jsx("h5", { className: "text-[20px] font-bold mb-[22px] text-white", children: "Nuestras redes sociales" }),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex gap-[18px]",
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: IconWhatsApp,
                        alt: "\xCDcono WhatsApp",
                        className: "social-icon"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: IconInstagram,
                        alt: "\xCDcono Instagram",
                        className: "social-icon"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: IconYouTube,
                        alt: "\xCDcono YouTube",
                        className: "social-icon"
                      }
                    ),
                    /* @__PURE__ */ jsx("img", { src: IconTikTok, alt: "\xCDcono TikTok", className: "social-icon" }),
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: IconLinkedIn,
                        alt: "\xCDcono LinkedIn",
                        className: "social-icon"
                      }
                    )
                  ]
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ jsx("hr", { className: "mt-[55px] mb-[35px]" }),
        /* @__PURE__ */ jsx("div", { className: "text-center text-[20px] font-normal", children: /* @__PURE__ */ jsx("p", { className: "text-white", children: "Antivirus para la Deserci\xF3n \xA9 2025 all rights reserved" }) })
      ]
    }
  );
}
function Button$1({
  text = "",
  textColor = "black",
  backgroundColor = "white",
  borderWidth = 0,
  customClass = "",
  onClick = () => {
  }
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: `rounded-[20px] text-[18px] px-4 py-1 ${customClass}`,
      style: {
        backgroundColor,
        color: textColor,
        borderWidth: `${borderWidth}px`
      },
      children: text
    }
  );
}
var IconSearch = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIMSURBVHgBpVTPS2pBFJ579fqWJunGHw/hyXu+uxE1lBTFhUEQ2ErU/C+CViJIK8FFEOTWTW1aRliEC3GRbXSlCzXhgi7cpBlqXvR6m7F7ZcxrUB0YZubM8J3vO+fMACBtBPiCyaT2iUSC6PV6tFKp/GcwGMhOp/MM3aQAzn8WkYJjEg6Hjy0WS5zjOBbuXwmC2BiPx6+lUmk3m80WhECcFIgcjmksFivKZDJzoVCw5vN5RrwUDAZ3rFbrXbvdPkyn0yfrGAHEIB6PP2OyxABIBunz+dSpVIp3uVx/BN/CFhskIZfLbWF0xUgzNCCzp3K5fGyz2a4E3zIIpEpPoRWLxcePF3Dp1Wr1TK/X05JMhsPhJs/zA8HHrwGZURQ1mEwmaE2tgCgUCkYul2/gPikmo9FIR5IkCsKugFQqlRbLsoNAILC3BgDd4/1+/2mj0biROpzPMB97brf72uPxbGJnqEIo0bNoNHqg0Wh2GYbZB+8tsTCxY4lms8mYzeYXh8ORU6vVJNReMxqNnEql+h0Khc7h+qjf7yPQW8RcZAfAcsfOSwtB/jqdzkudTmdBSYQdO63VatetVisIn4CdpumHer3uzmQy9wLQSjUJTCJhMpl+YWdzCZFIZDuZTPJoFkl8fIAAYCXudrv4G0ERSSRFq9Xeeb1exOQCsuqCb9g84bBz/9vtdgr8wJb+mzc6rMJMET8NsgAAAABJRU5ErkJggg==", IconSun = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMtSURBVHgBrVVbSFNhHP++b2czKvGypIurCLuJD1I+RT0MvKyQHnwYkfcoDFkFoS8+taQUwQjCF40QL4GbEmXRw7BtRfQSVoRYkOl0Ny9bznSj7Zzt3/mOSts856jQDz7O7fv//pfv//8dBdo6GGOtVoXSEeNwBIB/BvS/sTT74ufvuWH3dmyYpGeMViNbvyZg5dccAwg4JI8EW5L8saPFoF7boEy2jCFgMAKVCKmw19hwcQ+SA90A4AQ2ZDXHG67DM/G8xzP9rEeMnF22DlHbjpZqtawTNmgb5HwDwC7bzXGvadrx2SrW3gngVt6aOL8JuJBtEG0CIRouaDUDuKGsrJBGQ+oKCpQfLXerXvU39g3z68tIc+W6Y4OhUA3gAjYonrWkE0O1QI4837p0AB+iUZ8Jov4BYbGLJgB4D4HJx8V0j16vy5QixzKOcGCyuyht/z5LxD/PEYwTOi4GiFOpsxinw3n+UG6dBUnMBZEipwZpR47z5AsbyAVDjJiIb4E7eDLvtVarTTiTZAeMmINPlntVXMAlECEJEIKYmN9JHjTpLkk4UDC1tVrmYeutmVDAF0EAKXjXbsuBwxU1rvlAST4A3/ubAGM0u+DX8XdPPRN9PdFIqIiPmkvN3Bu909aWRzIywliByR+eHMfoLEXW7LaqNRj9C0JJaMZEECo+2MXFFKBp0fpFk8zIqKW5PP/0iT4Ih+Ud7FShsdGpylNFTQMiPIxUF2F6cDZbazji/hGTOgehk7JzGIzPYiShX1JdBHa7Peb5/vUCbUVKtIE8BpyS/7Y0OVEsRS7lQBiW8tJzadm51y1L3tkSGiUtBdmxunCKCqk0x4jXMaNLz6kZqa8vTY+3lcOqVITsJjr+t68KEyqUcdRyv/Jlf2MvXZ9HWiv4EtKyEb3uTOa2pIIN2c1UuNjQOzmxIyhZ7HxbELtHLVeyBLkOWofEovHO9HZPjT3pRiJZs6E3gzQTY8Nl2X8CabqpzxIjp3CPd3pd451iv0xhb7tRIJdqHAFy4odc410O3sH0JrYJHMn9LTu9qWq1EseiUpMHYhySQiYC5tqN9qMajYbei02/KP4CcFpsTtLl9mEAAAAASUVORK5CYII=", IconMoon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHeSURBVHgBxVRNSwJRFL3zZgYVhBwUNRDLRLAy1y6KiDZqiJugX9Ei/BP5Q8KF4Mal62rpoqRtgQQiaOT4PR/dN406Y2PYFHTg6cy8O+eed++5A/APYPRFQeCPwNOfZDKZiMViZ2ADZAXpNJPJ3CDxw3A4vIeF8rXBWZHmcrnGeDzea7fbz81mswM2YFRMVU3T6XR5NBrtyrKsMgzzAjZhKkU8Ht92Op3nKkJPpIJNGIlVn89XFEVRQV7tOf7vgE2YFHs8nhMkmzfK5XKFQ6GQC2zYzfgCi6QCGBwwGAwAiS/BRkm+VYINVAKBQBHJnfDVQWsTyxzHvS+pI71eT06lUk28lnTytTxtUtzpdGpoMVMA3rP4fCOfz4vRaHRTT8xYJDDds8YkXq/31u/3FyaTiWIMRHKCA8OGw+ECrmO05BMh5C2bzSq4xweDwUNc7VarNbXMQoEDUsLaXiiKYrWvlcnhcDA8r31OJExAkPyuUqkcrZQPi5F+xOnbR5fMPW0BqpZBSzaq1eoBfNZfmh9/KZgehcPABCoqu91uoqs0NpSOukr3MKakk/JGUivFM2jZI5HIFlrtWhCEU0mSBNpYPHmv2+3W+v3+Vb1ef52dEn6A5c6zYPYyARuf01/jA4+kpuAc0wBhAAAAAElFTkSuQmCC";
function HeaderGeneral() {
  let [isMenuOpen, setIsMenuOpen] = useState(!1), [darkMode, setDarkMode] = useState(!1), [isSubMenuOpen, setIsSubMenuOpen] = useState(!1), navigate = useNavigate(), { isLoggedIn, role } = useRootLoaderData() ?? {
    isLoggedIn: !1,
    role: null
  };
  function useRootLoaderData() {
    let rootMatch = useMatches().find((m) => m.id === "root");
    return rootMatch?.data;
  }
  let handleLogin = () => {
    navigate("/auth/login");
  }, handleRegister = () => {
    navigate("/auth/register");
  };
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `h-[80px] fixed flex items-center justify-between px-4 md:px-6 lg:px-10 w-full shadow-lg transition-all duration-300 z-50 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`,
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex items-center w-full md:w-auto",
          children: [
            /* @__PURE__ */ jsx("button", { onClick: () => {
              navigate("/");
            }, children: /* @__PURE__ */ jsx(
              "img",
              {
                src: Logo,
                alt: "Logo Fundaci\xF3n Antivirus",
                className: "w-[50px] h-[50px] object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxs("ul", {
              className: "hidden xl:flex gap-6 ml-6",
              children: [
                /* @__PURE__ */ jsx("li", { className: "relative", children: /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setIsSubMenuOpen(!isSubMenuOpen),
                    className: "hover:text-gray-500",
                    children: /* @__PURE__ */ jsx(Link, { to: "/#about-us", children: "\xBFQui\xE9nes somos?" })
                  }
                ) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#institutions", className: "hover:text-gray-500", children: "Instituciones" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#our-services", className: "hover:text-gray-500", children: "Servicios" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/opportunities", className: "hover:text-gray-500", children: "Oportunidades" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "#contact-form", className: "hover:text-gray-500", children: "Cont\xE1ctanos" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/#OurTeam", className: "hover:text-gray-500", children: "Nuestro equipo" }) })
              ]
            })
          ]
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "hidden md:flex items-center gap-3",
          children: [
            /* @__PURE__ */ jsxs("form", {
              className: "hidden md:flex items-center border border-gray-400 px-3 py-1 rounded-full",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: IconSearch,
                    alt: "\xCDcono Buscar",
                    className: "w-[18px] h-[18px]"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    placeholder: "Buscar",
                    className: "bg-transparent outline-none pl-2 w-[120px]"
                  }
                )
              ]
            }),
            isLoggedIn ? /* @__PURE__ */ jsxs(Fragment, {
              children: [
                /* @__PURE__ */ jsx(
                  Button$1,
                  {
                    onClick: () => navigate(role === "admin" ? "/admin/index" : "/user-dashboard"),
                    text: "Mi perfil",
                    backgroundColor: "#7C78B3",
                    textColor: "white"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button$1,
                  {
                    onClick: () => navigate("/logout"),
                    text: "Cerrar sesi\xF3n",
                    backgroundColor: "#ef4444",
                    textColor: "white"
                  }
                )
              ]
            }) : /* @__PURE__ */ jsxs(Fragment, {
              children: [
                /* @__PURE__ */ jsx(
                  Button$1,
                  {
                    onClick: handleLogin,
                    text: "Iniciar sesi\xF3n",
                    backgroundColor: "#7C78B3",
                    textColor: "white"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button$1,
                  {
                    onClick: handleRegister,
                    text: "Registrarme",
                    borderWidth: 1.5
                  }
                )
              ]
            }),
            /* @__PURE__ */ jsx("button", { onClick: () => {
              setDarkMode(!darkMode), document.documentElement.classList.toggle("dark");
            }, className: "focus:outline-none", children: darkMode ? /* @__PURE__ */ jsx("img", { src: IconSun, alt: "Modo Claro", className: "cursor-pointer" }) : /* @__PURE__ */ jsx("img", { src: IconMoon, alt: "Modo Oscuro", className: "cursor-pointer" }) })
          ]
        }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 xl:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsMenuOpen(!isMenuOpen),
            className: "text-inherit focus:outline-none",
            children: isMenuOpen ? /* @__PURE__ */ jsx(X, { size: 30, className: "text-inherit" }) : /* @__PURE__ */ jsx(Menu, { size: 30, className: "text-inherit" })
          }
        ) }),
        isMenuOpen && /* @__PURE__ */ jsxs(
          "div",
          {
            className: "absolute top-[80px] left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex flex-col gap-4 xl:hidden transition-all duration-300 z-40",
            children: [
              /* @__PURE__ */ jsxs("nav", {
                className: "flex flex-col gap-3 text-sm",
                children: [
                  /* @__PURE__ */ jsx(Link, { to: "/#about-us", onClick: () => setIsMenuOpen(!1), children: "\xBFQui\xE9nes somos?" }),
                  /* @__PURE__ */ jsx(Link, { to: "/#institutions", onClick: () => setIsMenuOpen(!1), children: "Instituciones" }),
                  /* @__PURE__ */ jsx(Link, { to: "/#our-services", onClick: () => setIsMenuOpen(!1), children: "Servicios" }),
                  /* @__PURE__ */ jsx(Link, { to: "/opportunities", onClick: () => setIsMenuOpen(!1), children: "Oportunidades" }),
                  /* @__PURE__ */ jsx(Link, { to: "#contact-form", onClick: () => setIsMenuOpen(!1), children: "Cont\xE1ctanos" }),
                  /* @__PURE__ */ jsx(Link, { to: "/#OurTeam", onClick: () => setIsMenuOpen(!1), children: "Nuestro equipo" })
                ]
              }),
              /* @__PURE__ */ jsx("div", { className: "border-t border-gray-300 pt-4 mt-2", children: isLoggedIn ? /* @__PURE__ */ jsxs(Fragment, {
                children: [
                  /* @__PURE__ */ jsx(
                    Button$1,
                    {
                      onClick: () => navigate(
                        role === "admin" ? "/admin/index" : "/user-dashboard"
                      ),
                      text: "Mi perfil",
                      backgroundColor: "#7C78B3",
                      textColor: "white"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button$1,
                    {
                      onClick: () => navigate("/logout"),
                      text: "Cerrar sesi\xF3n",
                      backgroundColor: "#ef4444",
                      textColor: "white"
                    }
                  )
                ]
              }) : /* @__PURE__ */ jsxs(Fragment, {
                children: [
                  /* @__PURE__ */ jsx(
                    Button$1,
                    {
                      onClick: handleLogin,
                      text: "Iniciar sesi\xF3n",
                      backgroundColor: "#7C78B3",
                      textColor: "white"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button$1,
                    {
                      onClick: handleRegister,
                      text: "Registrarme",
                      borderWidth: 1.5
                    }
                  )
                ]
              }) })
            ]
          }
        )
      ]
    }
  );
}
var FloatingButton = () => /* @__PURE__ */ jsx(
  Link$1,
  {
    to: "https://wa.me/3173831481",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "fixed bottom-20 right-5 md:bottom-24 md:right-8 lg:bottom-28 lg:right-10 z-30",
    children: /* @__PURE__ */ jsx("div", { className: "p-2 md:p-3 lg:p-4 rounded-full border-4 border-white bg-green-600 shadow-lg hover:bg-green-700 transition", children: /* @__PURE__ */ jsx(
      "svg",
      {
        className: "w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white",
        fill: "currentColor",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
            clipRule: "evenodd"
          }
        )
      }
    ) })
  }
);
function GeneralLayout() {
  return /* @__PURE__ */ jsxs("div", {
    id: "general-layout",
    children: [
      /* @__PURE__ */ jsx(HeaderGeneral, {}),
      /* @__PURE__ */ jsx(ButtonGoUp, {}),
      /* @__PURE__ */ jsx(ButtonDonateWompi, {}),
      /* @__PURE__ */ jsx("div", { className: "pt-20 overflow-hidden", children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(FooterGeneral, {}),
      /* @__PURE__ */ jsx(FloatingButton, {})
    ]
  });
}
function SuccessModal({
  // eslint-disable-next-line react/prop-types
  isOpen,
  // eslint-disable-next-line react/prop-types
  onClose
}) {
  let navigate = useNavigate$1();
  return isOpen ? /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50", children: /* @__PURE__ */ jsxs("div", {
    className: "bg-white p-6 rounded-lg shadow-lg w-96 text-center relative z-50",
    children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-green-600", children: "\u2705 Registro exitoso" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Ahora puedes iniciar sesi\xF3n." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            navigate("/auth?mode=login"), onClose();
          },
          className: "mt-4 px-4 py-2 bg-[#7C78B3] text-white rounded-lg w-full",
          children: "Ir a iniciar sesi\xF3n"
        }
      )
    ]
  }) }) : null;
}
var useAuthStore = create((set) => ({
  registrationSuccess: !1,
  setRegistrationSuccess: (value) => set({ registrationSuccess: value })
}));
function AuthLayout() {
  let isRegistering = useLocation().pathname.includes("register"), isModalOpen = useAuthStore((state) => state.registrationSuccess), setRegistrationSuccess = useAuthStore(
    (state) => state.setRegistrationSuccess
  );
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen flex flex-col overflow-hidden",
    children: [
      /* @__PURE__ */ jsx(HeaderGeneral, {}),
      /* @__PURE__ */ jsxs("div", {
        className: "h-screen pt-32 w-screen flex justify-center items-start gap-2 px-8 lg:gap-0 xl:gap-32 relative",
        children: [
          /* @__PURE__ */ jsx(
            SuccessModal,
            {
              isOpen: isModalOpen,
              onClose: () => {
                setRegistrationSuccess(!1);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/app/assets/images/antivirus_avatar.png",
              alt: "Antivirus Avatar",
              loading: "lazy",
              className: "hidden lg:block lg:max-w-[514px] h-auto"
            }
          ),
          /* @__PURE__ */ jsxs("div", {
            className: "bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.2)] flex justify-start flex-col items-center gap-4 lg:gap-4 rounded-lg w-[488px] h-auto pb-8 relative z-10",
            children: [
              /* @__PURE__ */ jsx("h1", { className: "text-center text-3xl text-black font-semibold mt-12", children: isRegistering ? "Registrarme" : "Acceder" }),
              /* @__PURE__ */ jsx(Outlet, {}),
              /* @__PURE__ */ jsxs("div", {
                className: "flex justify-center mt-4 space-x-4 px-14 w-full",
                children: [
                  /* @__PURE__ */ jsx(
                    Link$1,
                    {
                      to: "/auth/register",
                      className: `px-4 py-2 w-full rounded-lg text-center ${isRegistering ? "bg-[#7C78B3] text-white" : "bg-gray-300"}`,
                      children: "Registrarme"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Link$1,
                    {
                      to: "/auth/login",
                      className: `w-full px-4 py-2 rounded-lg text-center ${isRegistering ? "bg-gray-300" : "bg-[#7C78B3] text-white"}`,
                      children: "Acceder"
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsx("p", { className: "text-black font-medium text-lg", children: "Continuar con" }),
              /* @__PURE__ */ jsxs("div", {
                className: "flex gap-5",
                children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/app/assets/icons/google.png",
                      alt: "Google",
                      loading: "lazy",
                      className: "max-w-8 h-auto"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/app/assets/icons/facebook.png",
                      alt: "Facebook",
                      loading: "lazy",
                      className: "max-w-8 h-auto"
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsx(Link$1, { to: "/", className: "underline text-black", children: "Ir a inicio" })
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsx(FooterGeneral, {})
    ]
  });
}
function HeaderDashboard({
  onToggleSidebar,
  isSidebarOpen
}) {
  let [darkMode, setDarkMode] = useState(!1), navigate = useNavigate$1(), { isLoggedIn } = useRootLoaderData() ?? { isLoggedIn: !1 };
  function useRootLoaderData() {
    let rootMatch = useMatches().find((m) => m.id === "root");
    return rootMatch?.data;
  }
  return useEffect(() => {
    darkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [darkMode]), /* @__PURE__ */ jsxs("header", {
    className: "fixed top-0 left-0 w-full h-16 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md flex items-center justify-between px-4 md:px-6 z-50",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onToggleSidebar,
              "aria-label": "Toggle Sidebar",
              className: "md:hidden focus:outline-none",
              children: isSidebarOpen ? /* @__PURE__ */ jsx(X, { size: 28 }) : /* @__PURE__ */ jsx(Menu, { size: 28 })
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => navigate("/"),
              className: "flex items-center gap-2 text-sm font-medium hover:underline",
              children: [
                /* @__PURE__ */ jsx(Home, { size: 20 }),
                "Ir al inicio"
              ]
            }
          )
        ]
      }),
      /* @__PURE__ */ jsxs("div", {
        className: "flex items-center gap-4",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setDarkMode((prev) => !prev),
              "aria-label": "Toggle Dark Mode",
              children: darkMode ? /* @__PURE__ */ jsx(Sun, { size: 22 }) : /* @__PURE__ */ jsx(Moon, { size: 22 })
            }
          ),
          isLoggedIn && /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => navigate("/logout"),
              className: "flex items-center gap-1 text-sm hover:text-red-500",
              children: [
                /* @__PURE__ */ jsx(LogOut, { size: 20 }),
                "Cerrar sesi\xF3n"
              ]
            }
          )
        ]
      })
    ]
  });
}
function useCurrentUserEmail$1() {
  let root = useMatches().find((m) => m.id === "root"), data = root?.data;
  return data?.email ?? null;
}
function DashboardLayout() {
  let location = useLocation(), isActive = (path) => location.pathname === path || location.pathname.startsWith(path + "/"), currentUserEmail = useCurrentUserEmail$1(), [firstName, setFirstName] = useState(null), [sidebarOpen, setSidebarOpen] = useState(!1);
  return useEffect(() => {
    (async () => {
      try {
        let currentUser = (await (await fetch("http://localhost:5055/api/v1/user", {
          credentials: "include"
        })).json()).find((u) => u.email === currentUserEmail);
        setFirstName(currentUser?.fullName.split(" ")[0] ?? null);
      } catch (err) {
        console.error("Error al cargar usuarios", err);
      }
    })();
  }, [currentUserEmail]), /* @__PURE__ */ jsxs("div", {
    className: "flex min-h-screen relative pt-16",
    children: [
      /* @__PURE__ */ jsx(
        HeaderDashboard,
        {
          isSidebarOpen: sidebarOpen,
          onToggleSidebar: () => setSidebarOpen(!sidebarOpen)
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden p-4 fixed top-0 right-0 z-50",
          onClick: () => setSidebarOpen((prev) => !prev),
          children: /* @__PURE__ */ jsx(Menu, { size: 28, className: "text-gray-800" })
        }
      ),
      sidebarOpen && /* @__PURE__ */ jsx(
        "div",
        {
          role: "button",
          tabIndex: 0,
          "aria-label": "Cerrar men\xFA",
          className: "fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden",
          onClick: () => setSidebarOpen(!1),
          onKeyDown: (e) => {
            (e.key === "Enter" || e.key === "Escape") && setSidebarOpen(!1);
          }
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `fixed z-40 top-0 left-0 h-screen w-72 bg-gray-900 text-white p-4 space-y-4 transform transition-transform duration-300 ease-in-out md:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`,
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Admin Panel" }),
                /* @__PURE__ */ jsx("button", { onClick: () => setSidebarOpen(!1), children: /* @__PURE__ */ jsx(X, { size: 24 }) })
              ]
            }),
            /* @__PURE__ */ jsx("nav", { className: "flex flex-col space-y-2", children: /* @__PURE__ */ jsx(SidebarLinks, { isActive }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("aside", {
        className: "hidden md:block fixed h-screen w-72 pt-6 bg-gray-900 text-white p-4 space-y-4",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Admin Panel" }),
          /* @__PURE__ */ jsx("nav", { className: "flex flex-col space-y-2", children: /* @__PURE__ */ jsx(SidebarLinks, { isActive }) })
        ]
      }),
      /* @__PURE__ */ jsxs("main", {
        className: "flex-1 p-6 w-full md:ml-72",
        children: [
          /* @__PURE__ */ jsxs("h1", {
            className: "text-3xl font-bold mb-4 text-gray-700",
            children: [
              "Hola, ",
              firstName ?? "Usuario"
            ]
          }),
          /* @__PURE__ */ jsx(Outlet, {})
        ]
      })
    ]
  });
}
function SidebarLinks({ isActive }) {
  return /* @__PURE__ */ jsx(Fragment, { children: [
    { to: "/admin/index", icon: /* @__PURE__ */ jsx(Home, { size: 20 }), label: "Inicio" },
    { to: "/admin/users", icon: /* @__PURE__ */ jsx(Users, { size: 20 }), label: "Usuarios" },
    {
      to: "/admin/opportunities",
      icon: /* @__PURE__ */ jsx(Briefcase, { size: 20 }),
      label: "Oportunidades"
    },
    {
      to: "/admin/institutions",
      icon: /* @__PURE__ */ jsx(Building, { size: 20 }),
      label: "Instituciones"
    },
    { to: "/admin/services", icon: /* @__PURE__ */ jsx(Layers, { size: 20 }), label: "Servicios" },
    {
      to: "/admin/service-types",
      icon: /* @__PURE__ */ jsx(ClipboardList, { size: 20 }),
      label: "Tipos de Servicio"
    },
    {
      to: "/admin/opportunity-types",
      icon: /* @__PURE__ */ jsx(FolderCog, { size: 20 }),
      label: "Tipos de Oportunidad"
    },
    { to: "/admin/sectors", icon: /* @__PURE__ */ jsx(Network, { size: 20 }), label: "Sectores" }
  ].map((link) => /* @__PURE__ */ jsxs(
    Link$1,
    {
      to: link.to,
      className: `p-2 rounded flex gap-2 items-center ${isActive(link.to) ? "bg-gray-800 font-semibold" : "hover:bg-gray-800"}`,
      children: [
        link.icon,
        link.label
      ]
    },
    link.to
  )) });
}
var LAYOUT_FOR_ROUTES = [
  {
    routes: ["/", "/opportunities", "/about-us", "/404"],
    layout: GeneralLayout
  },
  {
    routes: ["/auth", "/auth/login", "/auth/register", "/auth_index"],
    layout: AuthLayout
  },
  {
    routes: [
      "/admin",
      "/admin/index",
      "/admin/users",
      "/admin/users/:id",
      "/admin/opportunities",
      "/admin/institutions",
      "/admin/services",
      "/admin/service-types",
      "/admin/opportunity-types",
      "/admin/sectors",
      "/admin/config"
    ],
    layout: DashboardLayout
  }
];
function NotFoundPage() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4", children: /* @__PURE__ */ jsxs("div", {
    className: "container flex flex-col md:flex-row items-center justify-center text-gray-700 max-w-6xl mx-auto",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "w-full md:w-1/2 text-center md:text-left p-6",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-6xl md:text-7xl text-green-500 font-extrabold mb-6", children: "404" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-2xl font-light leading-relaxed mb-6", children: "\xA1Error 404! Esta ruta no est\xE1 en el plan de estudios. Vuelve a explorar." }),
          /* @__PURE__ */ jsx(
            Link$1,
            {
              to: "/",
              className: "px-6 py-3 text-sm md:text-base font-medium shadow-md text-white rounded-lg bg-green-600 active:bg-red-600 hover:bg-red-700 transition duration-300",
              children: "Vuelve a inicio"
            }
          )
        ]
      }),
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/2 flex justify-center md:justify-end p-6", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/Javi-8.png",
          alt: "Page not found",
          className: "max-w-full h-auto object-contain"
        }
      ) })
    ]
  }) });
}
var route21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NotFoundPage
}, Symbol.toStringTag, { value: "Module" })), define_process_env_default$1 = {}, authToken = createCookie("authToken", {
  httpOnly: !0,
  path: "/",
  sameSite: "lax",
  secure: define_process_env_default$1.NODE_ENV === "production",
  encode: (value) => value,
  decode: (value) => value
}), userRole = createCookie("userRole", {
  httpOnly: !1,
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 2
}), userEmail = createCookie("userEmail");
async function loader$5({ request }) {
  let cookieHeader = request.headers.get("Cookie"), token = await authToken.parse(cookieHeader), role = await userRole.parse(cookieHeader), email = await userEmail.parse(cookieHeader);
  return json({
    isLoggedIn: !!token,
    role: role ?? null,
    email: email ?? null
  });
}
var links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ jsxs("head", {
        children: [
          /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
          /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
          /* @__PURE__ */ jsx(Meta, {}),
          /* @__PURE__ */ jsx(Links, {})
        ]
      }),
      /* @__PURE__ */ jsxs("body", {
        children: [
          children,
          /* @__PURE__ */ jsx(ScrollRestoration, {}),
          /* @__PURE__ */ jsx(Scripts, {})
        ]
      })
    ]
  });
}
function ErrorBoundary() {
  let error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404)
    return /* @__PURE__ */ jsx(NotFoundPage, {});
  let errorMessage = "Ocurri\xF3 un error inesperado.";
  return error instanceof Error && (errorMessage = error.message), /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen flex flex-col items-center justify-center text-center p-6",
    children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-red-600", children: "\xA1Ups! Algo sali\xF3 mal" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mt-4 text-gray-600", children: errorMessage })
    ]
  });
}
function CatchBoundary() {
  return /* @__PURE__ */ jsx(NotFoundPage, {});
}
function matchPath(pathname, route) {
  return route.includes(":") ? new RegExp("^" + route.replace(/:\w+/g, "[^/]+") + "$").test(pathname) : pathname === route;
}
function App() {
  var _a;
  let matches = useMatches(), currentPath = ((_a = matches[matches.length - 1]) == null ? void 0 : _a.pathname) || "/", matchedLayout = [...LAYOUT_FOR_ROUTES].sort(
    (a, b) => Math.max(...b.routes.map((r) => r.length)) - Math.max(...a.routes.map((r) => r.length))
  ).find(
    ({ routes: routes2 }) => routes2.some((route) => matchPath(currentPath, route))
  ), LayoutComponent = matchedLayout ? matchedLayout.layout : ({ children }) => /* @__PURE__ */ jsx(Fragment, { children });
  return /* @__PURE__ */ jsx(LayoutComponent, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
var route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CatchBoundary,
  ErrorBoundary,
  Layout,
  default: App,
  links,
  loader: loader$5
}, Symbol.toStringTag, { value: "Module" }));
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsx(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    }
  )
);
Button.displayName = "Button";
var Input = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsx(
    "input",
    {
      type,
      className: cn(
        "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  )
);
Input.displayName = "Input";
var Dialog = DialogPrimitive.Root, DialogPortal = DialogPrimitive.Portal, DialogOverlay = forwardRef2(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = forwardRef2(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, {
  children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        ref,
        className: cn(
          "fixed z-50 left-1/2 top-1/2 max-h-[90vh] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg rounded-lg focus:outline-none",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsx(DialogPrimitive.Close, { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) })
        ]
      }
    )
  ]
}));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("mb-4", className), ...props }), DialogTitle = ({
  className,
  children,
  ...props
}) => /* @__PURE__ */ jsx("h2", { className: cn("text-lg font-semibold", className), ...props, children: children || "T\xEDtulo" }), DialogDescription = ({
  className,
  children,
  ...props
}) => /* @__PURE__ */ jsx("p", { className: cn("text-sm text-gray-500 mb-4", className), ...props, children }), DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("mt-4 flex justify-end gap-2", className), ...props }), Label = ({ className, ...props }) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    className: cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    ),
    ...props
  }
);
function Pagination({
  totalItems,
  currentPage,
  pageSize,
  onPageChange
}) {
  let [searchParams, setSearchParams] = useSearchParams(), totalPages = Math.ceil(totalItems / pageSize), changePage = (page) => {
    if (page < 1 || page > totalPages)
      return;
    let newParams = new URLSearchParams(searchParams);
    newParams.set("page", String(page)), setSearchParams(newParams), onPageChange(page);
  }, changePageSize = (size) => {
    let newParams = new URLSearchParams(searchParams);
    newParams.set("pageSize", String(size)), newParams.set("page", "1"), setSearchParams(newParams);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex justify-center items-center gap-2 mt-4 flex-wrap",
    children: [
      /* @__PURE__ */ jsxs("div", {
        children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "pageSize",
              className: "mr-2 text-gray-700 dark:text-white",
              children: "Mostrar:"
            }
          ),
          /* @__PURE__ */ jsx(
            "select",
            {
              id: "pageSize",
              value: pageSize,
              onChange: (e) => changePageSize(Number(e.target.value)),
              className: "border p-1 rounded  ",
              children: [10, 20, 50, 100].map((size) => /* @__PURE__ */ jsx(
                "option",
                {
                  value: size,
                  className: "text-gray-700 dark:text-black",
                  children: size
                },
                size
              ))
            }
          )
        ]
      }),
      /* @__PURE__ */ jsxs("div", {
        className: "flex items-center gap-1",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => changePage(currentPage - 1),
              disabled: currentPage === 1,
              className: "py-2 px-4 rounded-md bg-gray-500 text-white disabled:bg-gray-300",
              children: "Previos"
            }
          ),
          [...Array(totalPages)].map((_, index) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => changePage(index + 1),
              className: `py-2 px-4 rounded-md ${currentPage === index + 1 ? "bg-blue-700 text-white" : "bg-gray-500 text-white"}`,
              children: index + 1
            },
            index + 1
          )),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => changePage(currentPage + 1),
              disabled: currentPage === totalPages,
              className: "py-2 px-4 rounded-md bg-gray-500 text-white disabled:bg-gray-300",
              children: "Siguiente"
            }
          )
        ]
      })
    ]
  });
}
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
function AdminOpportunityTypes() {
  let [types, setTypes] = useState([]), [categories, setCategories] = useState([]), [loading, setLoading] = useState(!0), [selected, setSelected] = useState(null), [deleteId, setDeleteId] = useState(null), [searchTerm, setSearchTerm] = useState(""), [searchParams, setSearchParams] = useSearchParams(), [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  ), [pageSize, setPageSize] = useState(
    Number(searchParams.get("pageSize")) || 10
  ), fetchOpportunityTypes = async () => {
    setLoading(!0);
    try {
      let data = await (await fetch("http://localhost:5055/api/v1/opportunity-type", {
        credentials: "include"
      })).json();
      setTypes(data);
    } catch (err) {
      console.error("Error al cargar tipos de oportunidad", err);
    } finally {
      setLoading(!1);
    }
  }, fetchCategories = async () => {
    try {
      let data = await (await fetch("http://localhost:5055/api/v1/categories", {
        credentials: "include"
      })).json();
      setCategories(data);
    } catch (err) {
      console.error("Error al cargar categor\xEDas", err);
    }
  }, handleSave = async () => {
    if (!selected)
      return;
    let method = selected.id ? "PUT" : "POST", url = selected.id ? `http://localhost:5055/api/v1/opportunity-type/${selected.id}` : "http://localhost:5055/api/v1/opportunity-type", body = JSON.stringify({
      name: selected.name,
      description: selected.description,
      categoryId: selected.categoryId,
      opportunityType: selected.name
    });
    try {
      let res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body
      });
      if (res.ok)
        fetchOpportunityTypes(), setSelected(null);
      else {
        let errData = await res.json();
        console.error("Error al guardar tipo de oportunidad", errData);
      }
    } catch (err) {
      console.error("Error en la petici\xF3n", err);
    }
  }, confirmDelete = async () => {
    if (deleteId)
      try {
        await fetch(`http://localhost:5055/api/v1/opportunity-type/${deleteId}`, {
          method: "DELETE",
          credentials: "include"
        }), setDeleteId(null), fetchOpportunityTypes();
      } catch (err) {
        console.error("Error al eliminar tipo de oportunidad", err);
      }
  };
  useEffect(() => {
    fetchOpportunityTypes(), fetchCategories();
  }, []);
  let filtered = types.filter(
    (t) => t.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return useEffect(() => {
    let newPageSize = Number(searchParams.get("pageSize")) || 10;
    setPageSize(newPageSize);
  }, [searchParams]), /* @__PURE__ */ jsxs("div", {
    children: [
      loading ? /* @__PURE__ */ jsx("p", { className: "text-4xl", children: "Cargando tipos de oportunidad..." }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex justify-between items-center mb-4",
            children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => setSelected({
                    name: "",
                    description: "",
                    categoryId: 0,
                    opportunityType: ""
                  }),
                  className: "flex gap-2 items-center",
                  children: [
                    /* @__PURE__ */ jsx(Plus, { size: 18 }),
                    " Nuevo"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Buscar por nombre...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-1/2"
                }
              )
            ]
          }),
          /* @__PURE__ */ jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxs("table", {
            className: "min-w-full bg-white rounded shadow dark:bg-neutral-600",
            children: [
              /* @__PURE__ */ jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxs("tr", {
                className: "dark:text-black",
                children: [
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Nombre" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Descripci\xF3n" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Acciones" })
                ]
              }) }),
              /* @__PURE__ */ jsx("tbody", { children: paginated.map((t) => /* @__PURE__ */ jsxs("tr", {
                className: "border-t",
                children: [
                  /* @__PURE__ */ jsx("td", { className: "p-2 text-left", children: t.name }),
                  /* @__PURE__ */ jsx("td", { className: "p-2 text-left", children: t.description ? t.description.length > 60 ? `${t.description.slice(0, 60)}...` : t.description : "Sin descripci\xF3n" }),
                  /* @__PURE__ */ jsxs("td", {
                    className: "p-2 flex gap-2",
                    children: [
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          onClick: () => setSelected({ ...t, opportunityType: t.name }),
                          children: /* @__PURE__ */ jsx(Pencil, { size: 16 })
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "destructive",
                          size: "sm",
                          onClick: () => setDeleteId(t.id),
                          children: /* @__PURE__ */ jsx(Trash2, { size: 16 })
                        }
                      )
                    ]
                  })
                ]
              }, t.id)) })
            ]
          }) })
        ]
      }),
      /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalItems: filtered.length,
          pageSize,
          onPageChange: (page) => {
            setCurrentPage(page), setSearchParams((prev) => {
              let next = new URLSearchParams(prev);
              return next.set("page", String(page)), next;
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(Dialog, { open: !!selected, onOpenChange: () => setSelected(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        className: "max-w-md",
        children: [
          /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: selected?.id ? "Editar Tipo de Oportunidad" : "Nuevo Tipo de Oportunidad" }) }),
          /* @__PURE__ */ jsxs("form", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nombre" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "name",
                      value: selected?.name || "",
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        name: e.target.value,
                        opportunityType: e.target.value
                      }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Descripci\xF3n" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      id: "description",
                      value: selected?.description || "",
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        description: e.target.value
                      }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "categoryId", children: "Categor\xEDa" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "categoryId",
                      value: selected?.categoryId || 0,
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        categoryId: Number(e.target.value)
                      })),
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: 0, children: "Seleccionar categor\xEDa" }),
                        categories.map((cat) => /* @__PURE__ */ jsx("option", { value: cat.id, children: cat.name }, cat.id))
                      ]
                    }
                  )
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => setSelected(null), children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: handleSave, children: "Guardar" })
            ]
          })
        ]
      }) }),
      /* @__PURE__ */ jsx(Dialog, { open: !!deleteId, onOpenChange: () => setDeleteId(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        "aria-describedby": "delete-type-description",
        children: [
          /* @__PURE__ */ jsxs(DialogHeader, {
            children: [
              /* @__PURE__ */ jsx(DialogTitle, { children: "\xBFEliminar tipo de oportunidad?" }),
              /* @__PURE__ */ jsx(DialogDescription, { id: "delete-type-description", children: "Esta acci\xF3n es irreversible. \xBFDeseas continuar?" })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { onClick: () => setDeleteId(null), variant: "outline", children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: confirmDelete, variant: "destructive", children: "Eliminar" })
            ]
          })
        ]
      }) })
    ]
  });
}
var route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminOpportunityTypes
}, Symbol.toStringTag, { value: "Module" }));
function AdminOpportunities() {
  var _a;
  let [opportunities, setOpportunities] = useState([]), [loading, setLoading] = useState(!0), [searchTerm, setSearchTerm] = useState(""), [searchParams, setSearchParams] = useSearchParams(), [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  ), [pageSize, setPageSize] = useState(
    Number(searchParams.get("pageSize")) || 10
  ), [selected, setSelected] = useState(null), [sectors, setSectors] = useState([]), [institutions, setInstitutions] = useState([]), [opportunityTypes, setOpportunityTypes] = useState([]);
  useEffect(() => {
    let newPageSize = Number(searchParams.get("pageSize")) || 10;
    setPageSize(newPageSize);
  }, [searchParams]);
  let fetchOpportunities = async () => {
    setLoading(!0);
    try {
      let data = await (await fetch("http://localhost:5055/api/v1/opportunity", {
        credentials: "include"
      })).json();
      setOpportunities(data);
    } catch (err) {
      console.error("Error al cargar oportunidades", err);
    } finally {
      setLoading(!1);
    }
  }, fetchSelectData = async () => {
    let fetchList = async (url) => {
      let res = await fetch(url, { credentials: "include" });
      return res.ok ? res.json() : [];
    };
    setSectors(await fetchList("http://localhost:5055/api/v1/sectors")), setInstitutions(
      await fetchList("http://localhost:5055/api/v1/institution")
    ), setOpportunityTypes(
      await fetchList("http://localhost:5055/api/v1/opportunity-type")
    );
  }, [localities, setLocalities] = useState([]), fetchLocalities = async () => {
    let formatted = (await (await fetch("http://localhost:5055/api/v1/localities", {
      credentials: "include"
    })).json()).map((l) => ({
      id: l.id,
      name: `${l.city} - ${l.state}`
    }));
    setLocalities(formatted);
  }, [deleteOpportunityId, setDeleteOpportunityId] = useState(
    null
  ), confirmDeleteOpportunity = async () => {
    if (deleteOpportunityId)
      try {
        await fetch(
          `http://localhost:5055/api/v1/opportunity/${deleteOpportunityId}`,
          {
            method: "DELETE",
            credentials: "include"
          }
        ), setDeleteOpportunityId(null), fetchOpportunities();
      } catch (err) {
        console.error("Error al eliminar oportunidad", err);
      }
  }, handleSave = async () => {
    if (!selected)
      return;
    let method = selected.id ? "PUT" : "POST", url = selected.id ? `http://localhost:5055/api/v1/opportunity/${selected.id}` : "http://localhost:5055/api/v1/opportunity", expirationDateUtc = selected.expirationDate ? new Date(selected.expirationDate).toISOString() : "", body = JSON.stringify({
      ...selected,
      expirationDate: expirationDateUtc
    });
    try {
      (await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body
      })).ok ? (fetchOpportunities(), setSelected(null)) : console.error("Error al guardar oportunidad");
    } catch (err) {
      console.error("Error en la petici\xF3n", err);
    }
  };
  useEffect(() => {
    fetchOpportunities(), fetchSelectData(), fetchLocalities();
  }, []);
  let filtered = opportunities.filter(
    (o) => o.title.toLowerCase().includes(searchTerm.toLowerCase())
  ), paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return useEffect(() => {
    let newPageSize = Number(searchParams.get("pageSize")) || 10;
    setPageSize(newPageSize);
  }, [searchParams]), /* @__PURE__ */ jsxs("div", {
    children: [
      loading ? /* @__PURE__ */ jsx("p", { className: "text-4xl", children: "Cargando oportunidades..." }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex justify-between items-center mb-4",
            children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => setSelected({
                    title: "",
                    description: "",
                    modality: "",
                    status: "abierta",
                    expirationDate: "",
                    institutionId: 0,
                    localityId: 0,
                    localityCity: "",
                    opportunityTypeId: 0,
                    sectorId: 0,
                    requirements: "",
                    benefits: ""
                  }),
                  className: "flex gap-2 items-center",
                  children: [
                    /* @__PURE__ */ jsx(Plus, { size: 18 }),
                    " Nueva"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Buscar por t\xEDtulo...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-full md:w-1/2"
                }
              )
            ]
          }),
          /* @__PURE__ */ jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxs("table", {
            className: "min-w-full bg-white rounded shadow dark:bg-neutral-600",
            children: [
              /* @__PURE__ */ jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxs("tr", {
                className: "dark:text-black",
                children: [
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "T\xEDtulo" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Instituci\xF3n" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Tipo" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Localidad" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Estado" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Publicaci\xF3n" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Expiraci\xF3n" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Acciones" })
                ]
              }) }),
              /* @__PURE__ */ jsx("tbody", { children: paginated.map((o) => {
                var _a2, _b;
                return /* @__PURE__ */ jsxs("tr", {
                  className: "border-t",
                  children: [
                    /* @__PURE__ */ jsx("td", { className: "p-2 text-left", children: o.title }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: o.institutionId }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: o.opportunityTypeId }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: o.localityCity }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: o.status }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: (_a2 = o.publicationDate) == null ? void 0 : _a2.split("T")[0] }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: (_b = o.expirationDate) == null ? void 0 : _b.split("T")[0] }),
                    /* @__PURE__ */ jsxs("td", {
                      className: "p-2 flex gap-2",
                      children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "outline",
                            size: "sm",
                            onClick: () => setSelected(o),
                            children: /* @__PURE__ */ jsx(Pencil, { size: 16 })
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "destructive",
                            size: "sm",
                            onClick: () => setDeleteOpportunityId(o.id),
                            children: /* @__PURE__ */ jsx(Trash2, { size: 16 })
                          }
                        )
                      ]
                    })
                  ]
                }, o.id);
              }) })
            ]
          }) })
        ]
      }),
      /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalItems: filtered.length,
          pageSize,
          onPageChange: (page) => {
            setCurrentPage(page), setSearchParams((prev) => {
              let next = new URLSearchParams(prev);
              return next.set("page", String(page)), next;
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(Dialog, { open: !!selected, onOpenChange: () => setSelected(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        className: "max-h-[90vh] overflow-auto max-w-[40rem]",
        children: [
          /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: selected?.id ? "Editar Oportunidad" : "Nueva Oportunidad" }) }),
          /* @__PURE__ */ jsxs("form", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "T\xEDtulo" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "title",
                      name: "title",
                      value: selected?.title || "",
                      onChange: (e) => setSelected((prev) => ({ ...prev, title: e.target.value }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Descripci\xF3n" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "description",
                      name: "description",
                      rows: 4,
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      value: selected?.description || "",
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        description: e.target.value
                      }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "sector", children: "Sector" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "sector",
                      name: "sector",
                      value: selected?.sectorId || 0,
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        sectorId: Number(e.target.value)
                      })),
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: 0, children: "Seleccionar sector" }),
                        sectors.map((s) => /* @__PURE__ */ jsx("option", { value: s.id, children: s.name }, s.id))
                      ]
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "institution", children: "Instituci\xF3n" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "institution",
                      name: "institution",
                      value: selected?.institutionId || 0,
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        institutionId: Number(e.target.value)
                      })),
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: 0, children: "Seleccionar instituci\xF3n" }),
                        institutions.map((i) => /* @__PURE__ */ jsx("option", { value: i.id, children: i.name }, i.id))
                      ]
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "opportunityType", children: "Tipo de Oportunidad" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "opportunityType",
                      name: "opportunityType",
                      value: selected?.opportunityTypeId || 0,
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        opportunityTypeId: Number(e.target.value)
                      })),
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: 0, children: "Seleccionar tipo" }),
                        opportunityTypes.map((t) => /* @__PURE__ */ jsx("option", { value: t.id, children: t.name }, t.id))
                      ]
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "locality", children: "Localidad" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "locality",
                      name: "locality",
                      value: selected?.localityId || 0,
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        localityId: Number(e.target.value)
                      })),
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: 0, children: "Seleccionar localidad" }),
                        localities.map((l) => /* @__PURE__ */ jsx("option", { value: l.id, children: l.name }, l.id))
                      ]
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "modality", children: "Modalidad" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "modality",
                      name: "modality",
                      value: selected?.modality || "",
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        modality: e.target.value
                      }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "status", children: "Estado" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "status",
                      name: "status",
                      value: selected?.status || "abierta",
                      onChange: (e) => setSelected((prev) => ({ ...prev, status: e.target.value })),
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "abierta", children: "Abierta" }),
                        /* @__PURE__ */ jsx("option", { value: "cerrada", children: "Cerrada" })
                      ]
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "expirationDate", children: "Fecha de expiraci\xF3n" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "expirationDate",
                      name: "expirationDate",
                      type: "date",
                      value: ((_a = selected?.expirationDate) == null ? void 0 : _a.split("T")[0]) || "",
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        expirationDate: e.target.value
                      }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "requirements", children: "Requisitos" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "requirements",
                      name: "requirements",
                      value: selected?.requirements || "",
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        requirements: e.target.value
                      }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "benefits", children: "Beneficios" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "benefits",
                      name: "benefits",
                      value: selected?.benefits || "",
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        benefits: e.target.value
                      }))
                    }
                  )
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => setSelected(null), children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: handleSave, children: "Guardar" })
            ]
          })
        ]
      }) }),
      /* @__PURE__ */ jsx(
        Dialog,
        {
          open: !!deleteOpportunityId,
          onOpenChange: () => setDeleteOpportunityId(null),
          children: /* @__PURE__ */ jsxs(DialogContent, {
            "aria-describedby": "delete-opportunity-description",
            children: [
              /* @__PURE__ */ jsxs(DialogHeader, {
                children: [
                  /* @__PURE__ */ jsx(DialogTitle, { children: "\xBFEliminar oportunidad?" }),
                  /* @__PURE__ */ jsx(DialogDescription, { id: "delete-opportunity-description", children: "Esta acci\xF3n es irreversible. \xBFDeseas continuar?" })
                ]
              }),
              /* @__PURE__ */ jsxs(DialogFooter, {
                children: [
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: () => setDeleteOpportunityId(null),
                      variant: "outline",
                      children: "Cancelar"
                    }
                  ),
                  /* @__PURE__ */ jsx(Button, { onClick: confirmDeleteOpportunity, variant: "destructive", children: "Eliminar" })
                ]
              })
            ]
          })
        }
      )
    ]
  });
}
var route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminOpportunities
}, Symbol.toStringTag, { value: "Module" }));
function AdminServiceTypes() {
  let [types, setTypes] = useState([]), [loading, setLoading] = useState(!0), [selected, setSelected] = useState(null), [deleteId, setDeleteId] = useState(null), [searchTerm, setSearchTerm] = useState(""), [searchParams, setSearchParams] = useSearchParams(), [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  ), [pageSize, setPageSize] = useState(
    Number(searchParams.get("pageSize")) || 10
  ), fetchServiceTypes = async () => {
    setLoading(!0);
    try {
      let data = await (await fetch("http://localhost:5055/api/serviceTypes", {
        credentials: "include"
      })).json();
      setTypes(data);
    } catch (err) {
      console.error("Error al cargar tipos de servicio", err);
    } finally {
      setLoading(!1);
    }
  }, handleSave = async () => {
    if (!selected)
      return;
    let method = selected.id ? "PUT" : "POST", url = selected.id ? `http://localhost:5055/api/serviceTypes/${selected.id}` : "http://localhost:5055/api/serviceTypes", body = JSON.stringify(selected);
    try {
      let res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body
      });
      if (res.ok)
        fetchServiceTypes(), setSelected(null);
      else {
        let errData = await res.json();
        console.error("Error al guardar tipo de servicio", errData);
      }
    } catch (err) {
      console.error("Error en la petici\xF3n", err);
    }
  }, confirmDelete = async () => {
    if (deleteId)
      try {
        await fetch(`http://localhost:5055/api/serviceTypes/${deleteId}`, {
          method: "DELETE",
          credentials: "include"
        }), setDeleteId(null), fetchServiceTypes();
      } catch (err) {
        console.error("Error al eliminar tipo de servicio", err);
      }
  };
  useEffect(() => {
    fetchServiceTypes();
  }, []);
  let filtered = types.filter(
    (t) => t.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return useEffect(() => {
    let newPageSize = Number(searchParams.get("pageSize")) || 10;
    setPageSize(newPageSize);
  }, [searchParams]), /* @__PURE__ */ jsxs("div", {
    children: [
      loading ? /* @__PURE__ */ jsx("p", { className: "text-4xl", children: "Cargando tipos de servicio..." }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex justify-between items-center mb-4",
            children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => setSelected({ name: "", description: "" }),
                  className: "flex gap-2 items-center",
                  children: [
                    /* @__PURE__ */ jsx(Plus, { size: 18 }),
                    " Nuevo"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Buscar por nombre...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-1/2"
                }
              )
            ]
          }),
          /* @__PURE__ */ jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxs("table", {
            className: "min-w-full bg-white rounded shadow dark:bg-neutral-600  ",
            children: [
              /* @__PURE__ */ jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxs("tr", {
                className: "dark:text-black",
                children: [
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Nombre" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Descripci\xF3n" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Acciones" })
                ]
              }) }),
              /* @__PURE__ */ jsx("tbody", { children: paginated.map((t) => /* @__PURE__ */ jsxs("tr", {
                className: "border-t",
                children: [
                  /* @__PURE__ */ jsx("td", { className: "p-2 text-left", children: t.name }),
                  /* @__PURE__ */ jsx("td", { className: "p-2 text-left", children: t.description ? t.description.length > 60 ? `${t.description.slice(0, 60)}...` : t.description : "Sin descripci\xF3n" }),
                  /* @__PURE__ */ jsxs("td", {
                    className: "p-2 flex gap-2",
                    children: [
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          onClick: () => setSelected(t),
                          children: /* @__PURE__ */ jsx(Pencil, { size: 16 })
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "destructive",
                          size: "sm",
                          onClick: () => setDeleteId(t.id),
                          children: /* @__PURE__ */ jsx(Trash2, { size: 16 })
                        }
                      )
                    ]
                  })
                ]
              }, t.id)) })
            ]
          }) })
        ]
      }),
      /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalItems: filtered.length,
          pageSize,
          onPageChange: (page) => {
            setCurrentPage(page), setSearchParams((prev) => {
              let next = new URLSearchParams(prev);
              return next.set("page", String(page)), next;
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(Dialog, { open: !!selected, onOpenChange: () => setSelected(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        className: "max-w-md",
        children: [
          /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: selected?.id ? "Editar Tipo" : "Nuevo Tipo de Servicio" }) }),
          /* @__PURE__ */ jsxs("form", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nombre" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "name",
                      value: selected?.name || "",
                      onChange: (e) => setSelected((prev) => ({ ...prev, name: e.target.value }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Descripci\xF3n" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "description",
                      rows: 4,
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      value: selected?.description || "",
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        description: e.target.value
                      }))
                    }
                  )
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => setSelected(null), children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: handleSave, children: "Guardar" })
            ]
          })
        ]
      }) }),
      /* @__PURE__ */ jsx(Dialog, { open: !!deleteId, onOpenChange: () => setDeleteId(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        "aria-describedby": "delete-type-description",
        children: [
          /* @__PURE__ */ jsxs(DialogHeader, {
            children: [
              /* @__PURE__ */ jsx(DialogTitle, { children: "\xBFEliminar tipo de servicio?" }),
              /* @__PURE__ */ jsx(DialogDescription, { id: "delete-type-description", children: "Esta acci\xF3n es irreversible. \xBFDeseas continuar?" })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { onClick: () => setDeleteId(null), variant: "outline", children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: confirmDelete, variant: "destructive", children: "Eliminar" })
            ]
          })
        ]
      }) })
    ]
  });
}
var route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminServiceTypes
}, Symbol.toStringTag, { value: "Module" }));
function AdminInstitutions() {
  let [institutions, setInstitutions] = useState([]), [loading, setLoading] = useState(!0), [searchTerm, setSearchTerm] = useState(""), [searchParams, setSearchParams] = useSearchParams(), [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  ), [pageSize, setPageSize] = useState(
    Number(searchParams.get("pageSize")) || 10
  ), [selected, setSelected] = useState(null), [deleteId, setDeleteId] = useState(null), fetchInstitutions = async () => {
    setLoading(!0);
    try {
      let data = await (await fetch("http://localhost:5055/api/v1/institution", {
        credentials: "include"
      })).json();
      setInstitutions(data);
    } catch (err) {
      console.error("Error al cargar instituciones", err);
    } finally {
      setLoading(!1);
    }
  }, handleSave = async () => {
    if (!selected)
      return;
    let method = selected.id ? "PUT" : "POST", url = (selected.id, "http://localhost:5055/api/v1/institution"), body = JSON.stringify(selected);
    try {
      (await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body
      })).ok ? (fetchInstitutions(), setSelected(null)) : console.error("Error al guardar instituci\xF3n");
    } catch (err) {
      console.error("Error en la petici\xF3n", err);
    }
  }, confirmDelete = async () => {
    if (deleteId)
      try {
        await fetch(`http://localhost:5055/api/v1/institution/${deleteId}`, {
          method: "DELETE",
          credentials: "include"
        }), setDeleteId(null), fetchInstitutions();
      } catch (err) {
        console.error("Error al eliminar instituci\xF3n", err);
      }
  };
  useEffect(() => {
    fetchInstitutions();
  }, []);
  let filtered = institutions.filter(
    (i) => i.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return useEffect(() => {
    let newPageSize = Number(searchParams.get("pageSize")) || 10;
    setPageSize(newPageSize);
  }, [searchParams]), /* @__PURE__ */ jsxs("div", {
    children: [
      loading ? /* @__PURE__ */ jsx("p", { className: "text-4xl", children: "Cargando instituciones..." }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex justify-between items-center mb-4",
            children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => setSelected({ name: "", image: "", link: "" }),
                  className: "flex gap-2 items-center",
                  children: [
                    /* @__PURE__ */ jsx(Plus, { size: 18 }),
                    " Nueva"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Buscar por nombre...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-1/2"
                }
              )
            ]
          }),
          /* @__PURE__ */ jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxs("table", {
            className: "min-w-full bg-white dark:bg-neutral-600 rounded shadow",
            children: [
              /* @__PURE__ */ jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxs("tr", {
                className: "dark:text-black",
                children: [
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left w-1/3", children: "Nombre" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left w-1/3", children: "Link" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-right w-1/3", children: "Acciones" })
                ]
              }) }),
              /* @__PURE__ */ jsx("tbody", { children: paginated.map((i) => /* @__PURE__ */ jsxs("tr", {
                className: "border-t",
                children: [
                  /* @__PURE__ */ jsx("td", { className: "p-2 text-left w-1/6", children: i.name }),
                  /* @__PURE__ */ jsx(
                    "td",
                    {
                      className: "p-2 text-left w-1/3 truncate max-w-[250px]",
                      title: i.link,
                      children: i.link
                    }
                  ),
                  /* @__PURE__ */ jsx("td", { className: "p-2 text-right w-1/3", children: /* @__PURE__ */ jsxs("div", {
                    className: "flex justify-end gap-2",
                    children: [
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          onClick: () => setSelected(i),
                          children: /* @__PURE__ */ jsx(Pencil, { size: 16 })
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "destructive",
                          size: "sm",
                          onClick: () => setDeleteId(i.id),
                          children: /* @__PURE__ */ jsx(Trash2, { size: 16 })
                        }
                      )
                    ]
                  }) })
                ]
              }, i.id)) })
            ]
          }) })
        ]
      }),
      /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalItems: filtered.length,
          pageSize,
          onPageChange: (page) => {
            setCurrentPage(page), setSearchParams((prev) => {
              let next = new URLSearchParams(prev);
              return next.set("page", String(page)), next;
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(Dialog, { open: !!selected, onOpenChange: () => setSelected(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        className: "max-h-[90vh] overflow-auto max-w-[40rem]",
        children: [
          /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: selected?.id ? "Editar Instituci\xF3n" : "Nueva Instituci\xF3n" }) }),
          /* @__PURE__ */ jsxs("form", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nombre" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "name",
                      name: "name",
                      value: selected?.name || "",
                      onChange: (e) => setSelected((prev) => ({ ...prev, name: e.target.value }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "image", children: "URL de Imagen" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "image",
                      name: "image",
                      value: selected?.image || "",
                      onChange: (e) => setSelected((prev) => ({ ...prev, image: e.target.value }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "link", children: "Link" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "link",
                      name: "link",
                      value: selected?.link || "",
                      onChange: (e) => setSelected((prev) => ({ ...prev, link: e.target.value }))
                    }
                  )
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => setSelected(null), children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: handleSave, children: "Guardar" })
            ]
          })
        ]
      }) }),
      /* @__PURE__ */ jsx(Dialog, { open: !!deleteId, onOpenChange: () => setDeleteId(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        "aria-describedby": "delete-institution-description",
        children: [
          /* @__PURE__ */ jsxs(DialogHeader, {
            children: [
              /* @__PURE__ */ jsx(DialogTitle, { children: "\xBFEliminar instituci\xF3n?" }),
              /* @__PURE__ */ jsx(DialogDescription, { id: "delete-institution-description", children: "Esta acci\xF3n es irreversible. \xBFDeseas continuar?" })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { onClick: () => setDeleteId(null), variant: "outline", children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: confirmDelete, variant: "destructive", children: "Eliminar" })
            ]
          })
        ]
      }) })
    ]
  });
}
var route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminInstitutions
}, Symbol.toStringTag, { value: "Module" })), route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function AdminServices() {
  let [services, setServices] = useState([]), [loading, setLoading] = useState(!0), [selected, setSelected] = useState(null), [deleteId, setDeleteId] = useState(null), [serviceTypes, setServiceTypes] = useState([]), [searchTerm, setSearchTerm] = useState(""), [searchParams, setSearchParams] = useSearchParams(), [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  ), [pageSize, setPageSize] = useState(
    Number(searchParams.get("pageSize")) || 10
  ), fetchServices = async () => {
    setLoading(!0);
    try {
      let data = await (await fetch("http://localhost:5055/api/v1/services", {
        credentials: "include"
      })).json();
      setServices(data);
    } catch (err) {
      console.error("Error al cargar servicios", err);
    } finally {
      setLoading(!1);
    }
  }, fetchServiceTypes = async () => {
    try {
      let data = await (await fetch("http://localhost:5055/api/serviceTypes", {
        credentials: "include"
      })).json();
      setServiceTypes(data);
    } catch (err) {
      console.error("Error al cargar tipos de servicio", err);
    }
  }, toggleServiceStatus = async (id, current) => {
    try {
      await fetch(`http://localhost:5055/api/v1/services/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ isActive: !current })
      }), setServices(
        (prev) => prev.map((s) => s.id === id ? { ...s, isActive: !current } : s)
      );
    } catch (err) {
      console.error("Error al cambiar estado", err);
    }
  }, handleSave = async () => {
    if (!selected)
      return;
    let method = selected.id ? "PUT" : "POST", url = selected.id ? `http://localhost:5055/api/v1/services/${selected.id}` : "http://localhost:5055/api/v1/services", body = JSON.stringify({
      serviceTypeId: selected.serviceTypeId,
      title: selected.title,
      description: selected.description,
      image: selected.image,
      isActive: selected.isActive
    });
    try {
      let res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body
      });
      if (res.ok)
        fetchServices(), setSelected(null);
      else {
        let errData = await res.json();
        console.error("Error al guardar servicio", errData);
      }
    } catch (err) {
      console.error("Error en la petici\xF3n", err);
    }
  }, confirmDelete = async () => {
    if (deleteId)
      try {
        await fetch(`http://localhost:5055/api/v1/services/${deleteId}`, {
          method: "DELETE",
          credentials: "include"
        }), setDeleteId(null), fetchServices();
      } catch (err) {
        console.error("Error al eliminar servicio", err);
      }
  };
  useEffect(() => {
    fetchServices(), fetchServiceTypes();
  }, []);
  let filtered = services.filter(
    (s) => s.title.toLowerCase().includes(searchTerm.toLowerCase())
  ), paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return useEffect(() => {
    let newPageSize = Number(searchParams.get("pageSize")) || 10;
    setPageSize(newPageSize);
  }, [searchParams]), /* @__PURE__ */ jsxs("div", {
    children: [
      loading ? /* @__PURE__ */ jsx("p", { className: "text-4xl", children: "Cargando servicios..." }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex justify-between items-center mb-4",
            children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => setSelected({
                    title: "",
                    description: "",
                    image: "",
                    serviceTypeId: 0,
                    isActive: !0
                  }),
                  className: "flex gap-2 items-center",
                  children: [
                    /* @__PURE__ */ jsx(Plus, { size: 18 }),
                    " Nuevo"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Buscar por t\xEDtulo...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-1/2"
                }
              )
            ]
          }),
          /* @__PURE__ */ jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxs("table", {
            className: "min-w-full bg-white rounded shadow dark:bg-neutral-600",
            children: [
              /* @__PURE__ */ jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxs("tr", {
                className: "dark:text-black",
                children: [
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "T\xEDtulo" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Tipo" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Estado" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Acciones" })
                ]
              }) }),
              /* @__PURE__ */ jsx("tbody", { children: paginated.map((s) => /* @__PURE__ */ jsxs("tr", {
                className: "border-t",
                children: [
                  /* @__PURE__ */ jsx("td", { className: "p-2 text-left", children: s.title }),
                  /* @__PURE__ */ jsx("td", { className: "p-2 text-left", children: s.serviceTypeName }),
                  /* @__PURE__ */ jsx("td", { className: "p-2 text-left", children: /* @__PURE__ */ jsx(
                    Switch,
                    {
                      checked: s.isActive,
                      onChange: () => toggleServiceStatus(s.id, s.isActive),
                      className: `${s.isActive ? "bg-green-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`,
                      children: /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: `${s.isActive ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("td", {
                    className: "p-2 flex gap-2",
                    children: [
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "outline",
                          size: "sm",
                          onClick: () => setSelected(s),
                          children: /* @__PURE__ */ jsx(Pencil, { size: 16 })
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "destructive",
                          size: "sm",
                          onClick: () => setDeleteId(s.id),
                          children: /* @__PURE__ */ jsx(Trash2, { size: 16 })
                        }
                      )
                    ]
                  })
                ]
              }, s.id)) })
            ]
          }) })
        ]
      }),
      /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalItems: filtered.length,
          pageSize,
          onPageChange: (page) => {
            setCurrentPage(page), setSearchParams((prev) => {
              let next = new URLSearchParams(prev);
              return next.set("page", String(page)), next;
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(Dialog, { open: !!selected, onOpenChange: () => setSelected(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        className: "max-h-[90vh] overflow-auto max-w-[40rem]",
        children: [
          /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: selected?.id ? "Editar Servicio" : "Nuevo Servicio" }) }),
          /* @__PURE__ */ jsxs("form", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "T\xEDtulo" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "title",
                      value: selected?.title || "",
                      onChange: (e) => setSelected((prev) => ({ ...prev, title: e.target.value }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Descripci\xF3n" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "description",
                      rows: 4,
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      value: selected?.description || "",
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        description: e.target.value
                      }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "image", children: "Imagen (URL)" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "image",
                      value: selected?.image || "",
                      onChange: (e) => setSelected((prev) => ({ ...prev, image: e.target.value }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "serviceType", children: "Tipo de Servicio" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "serviceType",
                      value: selected?.serviceTypeId || 0,
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        serviceTypeId: Number(e.target.value)
                      })),
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: 0, children: "Seleccionar tipo" }),
                        serviceTypes.map((t) => /* @__PURE__ */ jsx("option", { value: t.id, children: t.name }, t.id))
                      ]
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "isActive", children: "Activo" }),
                  /* @__PURE__ */ jsx(
                    Switch,
                    {
                      checked: selected?.isActive ?? !0,
                      onChange: () => setSelected((prev) => ({
                        ...prev,
                        isActive: !prev.isActive
                      })),
                      className: `${selected?.isActive ? "bg-green-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`,
                      children: /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: `${selected?.isActive ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`
                        }
                      )
                    }
                  )
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => setSelected(null), children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: handleSave, children: "Guardar" })
            ]
          })
        ]
      }) }),
      /* @__PURE__ */ jsx(Dialog, { open: !!deleteId, onOpenChange: () => setDeleteId(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        "aria-describedby": "delete-service-description",
        children: [
          /* @__PURE__ */ jsxs(DialogHeader, {
            children: [
              /* @__PURE__ */ jsx(DialogTitle, { children: "\xBFEliminar servicio?" }),
              /* @__PURE__ */ jsx(DialogDescription, { id: "delete-service-description", children: "Esta acci\xF3n es irreversible. \xBFDeseas continuar?" })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { onClick: () => setDeleteId(null), variant: "outline", children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: confirmDelete, variant: "destructive", children: "Eliminar" })
            ]
          })
        ]
      }) })
    ]
  });
}
var route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminServices
}, Symbol.toStringTag, { value: "Module" }));
function UserDashboard() {
  return /* @__PURE__ */ jsxs("div", {
    className: "p-8",
    children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Dashboard del Usuario" }),
      /* @__PURE__ */ jsx("p", { children: "\xA1Bienvenido! Aqu\xED podr\xE1s acceder a tus servicios y oportunidades." })
    ]
  });
}
var route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UserDashboard
}, Symbol.toStringTag, { value: "Module" }));
function AdminSectors() {
  let [sectors, setSectors] = useState([]), [selected, setSelected] = useState(null), [deleteId, setDeleteId] = useState(null), [searchTerm, setSearchTerm] = useState(""), [searchParams, setSearchParams] = useSearchParams(), [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  ), [pageSize, setPageSize] = useState(
    Number(searchParams.get("pageSize")) || 10
  ), [loading, setLoading] = useState(!0), fetchSectors = async () => {
    setLoading(!0);
    try {
      let data = await (await fetch("http://localhost:5055/api/v1/sectors", {
        credentials: "include"
      })).json();
      setSectors(data);
    } catch (err) {
      console.error("Error al cargar sectores", err);
    } finally {
      setLoading(!1);
    }
  }, handleSave = async () => {
    if (!selected)
      return;
    let method = selected.id ? "PUT" : "POST", url = selected.id ? `http://localhost:5055/api/v1/sectors/${selected.id}` : "http://localhost:5055/api/v1/sectors", body = JSON.stringify({
      name: selected.name,
      description: selected.description
    });
    try {
      let res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body
      });
      if (res.ok) {
        if (selected.id)
          setSectors(
            (prev) => prev.map(
              (s) => s.id === selected.id ? {
                ...s,
                name: selected.name,
                description: selected.description
              } : s
            )
          );
        else {
          let newSector = await res.json();
          setSectors((prev) => [...prev, newSector]), setCurrentPage(1);
        }
        setSelected(null);
      } else
        console.error("Error al guardar sector", await res.json());
    } catch (err) {
      console.error("Error en la petici\xF3n", err);
    }
  }, confirmDelete = async () => {
    if (deleteId)
      try {
        await fetch(`http://localhost:5055/api/v1/sectors/${deleteId}`, {
          method: "DELETE",
          credentials: "include"
        }), setDeleteId(null), fetchSectors();
      } catch (err) {
        console.error("Error al eliminar sector", err);
      }
  };
  useEffect(() => {
    fetchSectors();
  }, []);
  let filtered = sectors.filter(
    (s) => s.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return useEffect(() => {
    let newPageSize = Number(searchParams.get("pageSize")) || 10;
    setPageSize(newPageSize);
  }, [searchParams]), /* @__PURE__ */ jsxs("div", {
    children: [
      loading ? /* @__PURE__ */ jsx("p", { className: "text-4xl", children: "Cargando sectores..." }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex justify-between items-center mb-4",
            children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => setSelected({ name: "", description: "" }),
                  className: "flex gap-2 items-center",
                  children: [
                    /* @__PURE__ */ jsx(Plus, { size: 18 }),
                    " Nuevo"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Buscar por nombre...",
                  value: searchTerm,
                  onChange: (e) => setSearchTerm(e.target.value),
                  className: "w-1/2"
                }
              )
            ]
          }),
          /* @__PURE__ */ jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxs("table", {
            className: "min-w-full bg-white rounded shadow dark:bg-neutral-600",
            children: [
              /* @__PURE__ */ jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxs("tr", {
                className: "dark:text-black",
                children: [
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Nombre" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Descripci\xF3n" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2 text-left", children: "Acciones" })
                ]
              }) }),
              /* @__PURE__ */ jsx("tbody", { children: paginated.map((s) => {
                var _a;
                return /* @__PURE__ */ jsxs("tr", {
                  className: "border-t",
                  children: [
                    /* @__PURE__ */ jsx("td", { className: "p-2 text-left", children: s.name }),
                    /* @__PURE__ */ jsx("td", { className: "p-2 text-left", children: (_a = s.description) != null && _a.length ? s.description : "Sin descripci\xF3n" }),
                    /* @__PURE__ */ jsxs("td", {
                      className: "p-2 flex gap-2",
                      children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "outline",
                            size: "sm",
                            onClick: () => setSelected(s),
                            children: /* @__PURE__ */ jsx(Pencil, { size: 16 })
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "destructive",
                            size: "sm",
                            onClick: () => setDeleteId(s.id),
                            children: /* @__PURE__ */ jsx(Trash2, { size: 16 })
                          }
                        )
                      ]
                    })
                  ]
                }, s.id);
              }) })
            ]
          }) })
        ]
      }),
      /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalItems: filtered.length,
          pageSize,
          onPageChange: (page) => {
            setCurrentPage(page), setSearchParams((prev) => {
              let next = new URLSearchParams(prev);
              return next.set("page", String(page)), next;
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(Dialog, { open: !!selected, onOpenChange: () => setSelected(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        className: "max-w-md",
        children: [
          /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: selected?.id ? "Editar Sector" : "Nuevo Sector" }) }),
          /* @__PURE__ */ jsxs("form", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Nombre" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      id: "name",
                      value: selected?.name || "",
                      onChange: (e) => setSelected((prev) => ({ ...prev, name: e.target.value }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Descripci\xF3n" }),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "description",
                      rows: 3,
                      className: "w-full border border-gray-300 rounded p-2 bg-white",
                      value: selected?.description || "",
                      onChange: (e) => setSelected((prev) => ({
                        ...prev,
                        description: e.target.value
                      }))
                    }
                  )
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => setSelected(null), children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: handleSave, children: "Guardar" })
            ]
          })
        ]
      }) }),
      /* @__PURE__ */ jsx(Dialog, { open: !!deleteId, onOpenChange: () => setDeleteId(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        "aria-describedby": "delete-sector-description",
        children: [
          /* @__PURE__ */ jsxs(DialogHeader, {
            children: [
              /* @__PURE__ */ jsx(DialogTitle, { children: "\xBFEliminar sector?" }),
              /* @__PURE__ */ jsx(DialogDescription, { id: "delete-sector-description", children: "Esta acci\xF3n es irreversible. \xBFDeseas continuar?" })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { onClick: () => setDeleteId(null), variant: "outline", children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: confirmDelete, variant: "destructive", children: "Eliminar" })
            ]
          })
        ]
      }) })
    ]
  });
}
var route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminSectors
}, Symbol.toStringTag, { value: "Module" }));
function RegisterForm() {
  var _a, _b, _c;
  let actionData = useActionData(), setRegistrationSuccess = useAuthStore(
    (state) => state.setRegistrationSuccess
  ), [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    birthdate: "",
    password: "",
    confirm_password: ""
  }), [isFormValid, setIsFormValid] = useState(!1), [passwordError, setPasswordError] = useState(null), [phoneError, setPhoneError] = useState(null), [passwordLengthError, setPasswordLengthError] = useState(
    null
  ), [emailError, setEmailError] = useState(null);
  useEffect(() => {
    let allFieldsFilled = formData.fullname.trim() !== "" && formData.email.trim() !== "" && formData.phone.length === 10 && formData.birthdate.trim() !== "" && formData.password.length >= 6 && formData.confirm_password.trim() !== "", passwordsMatch = formData.password === formData.confirm_password;
    setPasswordError(
      !passwordsMatch && formData.confirm_password.length > 0 ? "Las contrase\xF1as no coinciden" : null
    ), setPhoneError(
      formData.phone.length > 0 && formData.phone.length !== 10 ? "El n\xFAmero debe contener 10 d\xEDgitos." : null
    ), setPasswordLengthError(
      formData.password.length > 0 && formData.password.length < 6 ? "La contrase\xF1a debe tener al menos 6 caracteres." : null
    ), setIsFormValid(allFieldsFilled && passwordsMatch);
  }, [formData]);
  let handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/\D/g, "") : value
    })), name === "email" && setEmailError(null), name === "email" && setEmailError(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : "Ingresa un correo v\xE1lido"
    );
  }, handleSubmit = async (e) => {
    if (e.preventDefault(), !isFormValid)
      return;
    let requestData = {
      fullName: formData.fullname,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confirmPassword: formData.confirm_password,
      birthdate: new Date(formData.birthdate).toISOString().split("T")[0]
    };
    try {
      let response = await fetch("/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(requestData)
      });
      if (!response.ok) {
        response.status === 409 ? setEmailError("El correo ya est\xE1 registrado.") : setEmailError(null);
        return;
      }
      setEmailError(null), setRegistrationSuccess(!0);
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };
  return /* @__PURE__ */ jsxs(
    Form,
    {
      method: "post",
      action: "/auth/register",
      className: "flex flex-col items-center text-gray-500 w-full h-full px-12 gap-6",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-start w-full relative",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "fullname",
                placeholder: "Nombre completo",
                autoComplete: "name",
                className: `outline-none rounded-lg bg-white border border-gray-400 px-3 py-1 w-full \r
             appearance-auto focus:outline-none focus:ring-2 focus:ring-[#7C78B3] \r
             text-gray-700 placeholder-gray-500`,
                value: formData.fullname,
                onChange: handleInputChange
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-red-500 absolute top-9 text-[10px] md:top-8 md:text-base", children: ((_a = actionData?.fieldErrors) == null ? void 0 : _a.fullname) || "" })
          ]
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-start w-full relative",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Correo",
                autoComplete: "email",
                className: `outline-none rounded-lg bg-white border border-gray-400 px-3 py-1 w-full \r
             appearance-auto focus:outline-none focus:ring-2 focus:ring-[#7C78B3] \r
             text-gray-700 placeholder-gray-500`,
                value: formData.email,
                onChange: handleInputChange
              }
            ),
            emailError && /* @__PURE__ */ jsx("p", { className: "text-red-500 absolute top-9 text-[10px] md:top-8 md:text-base", children: emailError })
          ]
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-start w-full relative",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                name: "phone",
                inputMode: "numeric",
                placeholder: "Celular",
                autoComplete: "tel",
                className: `outline-none rounded-lg bg-white border border-gray-400 px-3 py-1 w-full \r
             appearance-auto focus:outline-none focus:ring-2 focus:ring-[#7C78B3] \r
             text-gray-700 placeholder-gray-500`,
                value: formData.phone,
                onChange: handleInputChange
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-red-500 absolute top-9 text-[10px] md:top-8 md:text-base", children: phoneError })
          ]
        }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start w-full relative", children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "date",
            name: "birthdate",
            autoComplete: "bday-day",
            className: `outline-none rounded-lg bg-white border border-gray-400 px-3 py-1 w-full \r
             appearance-auto focus:outline-none focus:ring-2 focus:ring-[#7C78B3] \r
             text-gray-700 placeholder-gray-500`,
            value: formData.birthdate,
            onChange: handleInputChange,
            style: {
              color: "#333"
            }
          }
        ) }),
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-start w-full relative",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "password",
                name: "password",
                placeholder: "Contrase\xF1a",
                autoComplete: "new-password",
                className: `outline-none rounded-lg bg-white border border-gray-400 px-3 py-1 w-full \r
             appearance-auto focus:outline-none focus:ring-2 focus:ring-[#7C78B3] \r
             text-gray-700 placeholder-gray-500`,
                value: formData.password,
                onChange: handleInputChange
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-red-500 absolute top-9 text-[10px] md:top-8 md:text-base", children: ((_b = actionData?.fieldErrors) == null ? void 0 : _b.password) || passwordLengthError || "" })
          ]
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-start w-full relative",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "password",
                name: "confirm_password",
                placeholder: "Confirme contrase\xF1a",
                autoComplete: "new-password",
                className: `outline-none rounded-lg bg-white border border-gray-400 px-3 py-1 w-full \r
             appearance-auto focus:outline-none focus:ring-2 focus:ring-[#7C78B3] \r
             text-gray-700 placeholder-gray-500`,
                value: formData.confirm_password,
                onChange: handleInputChange
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-red-500 absolute top-9 text-[10px] md:top-8 md:text-base", children: passwordError || ((_c = actionData?.fieldErrors) == null ? void 0 : _c.confirmPassword) || "" })
          ]
        }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleSubmit,
            className: `px-4 py-2 rounded-lg w-full ${isFormValid ? "bg-[#7C78B3] text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`,
            disabled: !isFormValid,
            children: "Enviar"
          }
        )
      ]
    }
  );
}
var action$1 = async ({ request }) => {
  let formData = await request.formData(), fullName = formData.get("fullname"), email = formData.get("email"), phone = formData.get("phone"), password = formData.get("password"), confirmPassword = formData.get("confirm_password"), birthdate = formData.get("birthdate"), fieldErrors = {};
  if (fullName || (fieldErrors.fullname = "El nombre es obligatorio."), email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || (fieldErrors.email = "Correo inv\xE1lido.") : fieldErrors.email = "El correo es obligatorio.", password ? password.length < 6 && (fieldErrors.password = "Debe tener al menos 6 caracteres.") : fieldErrors.password = "La contrase\xF1a es obligatoria.", confirmPassword ? password !== confirmPassword && (fieldErrors.confirmPassword = "Las contrase\xF1as no coinciden.") : fieldErrors.confirmPassword = "Confirma la contrase\xF1a.", birthdate || (fieldErrors.birthdate = "La fecha de nacimiento es obligatoria."), Object.keys(fieldErrors).length > 0)
    return json({ fieldErrors }, { status: 400 });
  let response = await fetch("http://localhost:5055/api/v1/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName,
      email,
      phone,
      role: "user",
      password,
      birthdate
    })
  }), responseBody = await response.json(), statusCode = response.status;
  return statusCode === 201 ? json({ success: !0 }, { status: 201 }) : json(responseBody, { status: statusCode });
};
function RegisterPage() {
  let actionData = useActionData(), setRegistrationSuccess = useAuthStore(
    (state) => state.setRegistrationSuccess
  );
  return useEffect(() => {
    actionData?.success && setRegistrationSuccess(!0);
  }, [actionData, setRegistrationSuccess]), /* @__PURE__ */ jsx(RegisterForm, {});
}
var route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  default: RegisterPage
}, Symbol.toStringTag, { value: "Module" })), API_URL = "http://localhost:5055/api/v1/opportunity";
async function getOpportunities() {
  let response = await fetch(API_URL);
  if (!response.ok)
    throw new Error("Error al obtener oportunidades");
  return response.json();
}
var StarRating = ({
  opportunityId,
  comment,
  userId,
  isWhiteText = !1
}) => {
  let [rating, setRating] = useState(0), [hover, setHover] = useState(0), [average, setAverage] = useState(0), [userVoted, setUserVoted] = useState(!1);
  useEffect(() => {
    fetch(`http://localhost:5055/api/v1/ratings/opportunity/${opportunityId}/average`).then((res) => {
      if (!res.ok)
        throw new Error(`Error en la API: ${res.status} - ${res.statusText}`);
      return res.json();
    }).then((data) => {
      setAverage(data.Average || 0);
    }).catch((err) => console.error("Error al obtener la calificaci\xF3n:", err));
  }, [opportunityId]);
  let handleClick = (score) => {
    if (rating > 0)
      return;
    let payload = {
      opportunityId,
      score,
      userId,
      comment: comment || "Sin comentario"
    };
    fetch(`http://localhost:5055/api/v1/ratings/opportunity/${opportunityId}/average`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).then(async (res) => {
      if (!res.ok) {
        let errorText = await res.text();
        console.error("Error en la respuesta del backend:", errorText);
        return;
      }
      return res.json();
    }).then((data) => {
      data && (console.log("Nuevo promedio guardado:", data.average), setRating(score), setAverage(data.average), setUserVoted(!0));
    }).catch((err) => console.error("Error al enviar la calificaci\xF3n:", err));
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "flex items-center text-sm mt-2",
    children: [
      [...Array(5)].map((_, index) => /* @__PURE__ */ jsx(
        Star,
        {
          size: 20,
          fill: index < (hover || rating) ? "#ffcc00" : "transparent",
          stroke: "#ffcc00",
          className: "cursor-pointer",
          onMouseEnter: () => !userVoted && setHover(index + 1),
          onMouseLeave: () => !userVoted && setHover(0),
          onClick: () => handleClick(index + 1)
        },
        index
      )),
      /* @__PURE__ */ jsxs("span", {
        className: `ml-2 ${isWhiteText ? "text-white" : "text-gray-700 ml-2"}`,
        children: [
          "(",
          (hover || rating || average).toFixed(1),
          "/5)"
        ]
      })
    ]
  });
}, OpportunityCard = ({ opportunity }) => {
  let price = opportunity.price ?? 0, discountPrice = opportunity.discountPrice ?? price, [showDetails, setShowDetails] = useState(!1), [isFavorite, setIsFavorite] = useState(!1), formatDate = (dateString) => new Date(dateString).toISOString().split("T")[0], handleMarkFavorite = async () => {
    try {
      (await fetch(
        `http://localhost:5055/api/v1/favorites/${opportunity.id}`,
        // Aquí se usa opportunity.id correctamente
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            opportunityId: opportunity.id
          })
        }
      )).ok && setIsFavorite(!0);
    } catch (error) {
      console.error("Error al marcar como favorita:", error);
    }
  };
  return useEffect(() => {
    (async () => {
      try {
        let response = await fetch("http://localhost:5055/api/v1/favorites");
        if (!response.ok)
          throw new Error(
            `Error en la API: ${response.status} - ${response.statusText}`
          );
        let favorites = await response.json().catch(() => (console.warn("La respuesta de favoritos no es JSON v\xE1lido"), []));
        setIsFavorite(
          favorites.some(
            (favorite) => favorite.opportunityId === opportunity.id
          )
        );
      } catch (error) {
        console.error("Error al obtener favoritos:", error);
      }
    })();
  }, [opportunity.id]), /* @__PURE__ */ jsx("div", { className: "mx-auto flex flex-wrap justify-center items-start gap-8 p-4", children: /* @__PURE__ */ jsx("div", {
    className: "bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-72 h-96 border border-gray-200",
    children: showDetails ? (
      /* Cara B */
      /* @__PURE__ */ jsxs("div", {
        className: "h-full flex flex-col justify-between p-4 bg-yellow-400 text-gray-900",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: opportunity.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: opportunity.description }),
          /* @__PURE__ */ jsxs("div", {
            className: "text-xs mt-2",
            children: [
              /* @__PURE__ */ jsxs("p", {
                children: [
                  /* @__PURE__ */ jsx("strong", { children: "Categor\xEDa:" }),
                  " ",
                  opportunity.categoryName
                ]
              }),
              /* @__PURE__ */ jsxs("p", {
                children: [
                  /* @__PURE__ */ jsx("strong", { children: "Beneficios:" }),
                  " ",
                  opportunity.benefits
                ]
              }),
              /* @__PURE__ */ jsxs("p", {
                children: [
                  /* @__PURE__ */ jsx("strong", { children: "Modalidad:" }),
                  " ",
                  opportunity.modality
                ]
              }),
              /* @__PURE__ */ jsxs("p", {
                children: [
                  /* @__PURE__ */ jsx("strong", { children: "Fecha de Expiraci\xF3n:" }),
                  " ",
                  formatDate(opportunity.expirationDate)
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "mt-4 flex space-x-2",
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "flex-1 bg-blue-600 text-white text-sm font-bold py-2 rounded-lg hover:bg-blue-700 transition",
                  onClick: () => setShowDetails(!1),
                  children: "Volver"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "flex-1 bg-gray-800 text-white text-sm font-bold py-2 rounded-lg hover:bg-gray-900 transition",
                  onClick: () => window.open(opportunity.institutionLink, "_blank"),
                  children: "Postularme"
                }
              )
            ]
          })
        ]
      })
    ) : /* @__PURE__ */ jsxs(
      "div",
      {
        className: `h-full flex flex-col justify-between p-4 ${[2, 8, 9].includes(opportunity.institutionId) ? "bg-[#3C3C3C] text-white" : "bg-white"}`,
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "relative w-full h-32 overflow-hidden",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: opportunity.institutionImage,
                  alt: `Logo de ${opportunity.institutionName}`,
                  className: "w-full h-full object-contain"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded", children: opportunity.status })
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col flex-grow justify-between",
            children: [
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: `text-lg font-semibold ${[2, 8, 9].includes(opportunity.institutionId) ? "text-white" : "text-gray-900"}`,
                  children: opportunity.title
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `text-xs mt-2 ${[2, 8, 9].includes(opportunity.institutionId) ? "text-white" : "text-gray-500"}`,
                  children: [
                    /* @__PURE__ */ jsxs("p", {
                      children: [
                        /* @__PURE__ */ jsx("strong", { children: "Instituci\xF3n:" }),
                        " ",
                        opportunity.institutionName
                      ]
                    }),
                    /* @__PURE__ */ jsxs("p", {
                      children: [
                        /* @__PURE__ */ jsx("strong", { children: "Sector:" }),
                        " ",
                        opportunity.sectorName
                      ]
                    }),
                    /* @__PURE__ */ jsxs("p", {
                      children: [
                        /* @__PURE__ */ jsx("strong", { children: "Tipo de Oportunidad:" }),
                        " ",
                        opportunity.opportunityTypeName
                      ]
                    }),
                    /* @__PURE__ */ jsxs("p", {
                      children: [
                        /* @__PURE__ */ jsx("strong", { children: "Ubicaci\xF3n:" }),
                        " ",
                        opportunity.localityCity
                      ]
                    }),
                    /* @__PURE__ */ jsxs("p", {
                      children: [
                        /* @__PURE__ */ jsx("strong", { children: "Fecha de Publicaci\xF3n:" }),
                        " ",
                        formatDate(opportunity.publicationDate)
                      ]
                    }),
                    /* @__PURE__ */ jsxs("p", {
                      children: [
                        /* @__PURE__ */ jsx("strong", { children: "Fecha de Expiraci\xF3n:" }),
                        " ",
                        formatDate(opportunity.expirationDate)
                      ]
                    })
                  ]
                }
              )
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "flex items-center justify-between mt-2",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ jsxs("span", {
                    className: "text-green-600 font-bold text-lg",
                    children: [
                      "$",
                      discountPrice.toFixed(2)
                    ]
                  }),
                  discountPrice < price && /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: `line-through text-sm ${[2, 8, 9].includes(opportunity.institutionId) ? "text-white" : "text-gray-500"}`,
                      children: [
                        "$",
                        price.toFixed(2)
                      ]
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: [2, 8, 9].includes(opportunity.institutionId) ? "text-white" : "text-gray-500",
                  children: /* @__PURE__ */ jsx(
                    StarRating,
                    {
                      opportunityId: opportunity.id,
                      userId: opportunity.userId,
                      comment: opportunity.comment,
                      score: opportunity.score,
                      isWhiteText: [2, 8, 9].includes(opportunity.institutionId)
                    }
                  )
                }
              )
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "mt-4 flex space-x-2",
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: `flex-1 text-sm font-bold py-2 rounded-lg transition ${isFavorite ? "bg-gray-500 cursor-not-allowed text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`,
                  onClick: handleMarkFavorite,
                  disabled: isFavorite,
                  children: isFavorite ? "Marcada como Favorita" : "Marcar Favorita"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: `flex-1 text-sm font-bold py-2 rounded-lg hover:bg-gray-300 transition ${[2, 8, 9].includes(opportunity.institutionId) ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-700"}`,
                  onClick: () => setShowDetails(!0),
                  children: "M\xE1s informaci\xF3n"
                }
              )
            ]
          })
        ]
      }
    )
  }) });
}, OpportunityFilter = ({
  onFilterChange
}) => {
  let [filters, setFilters] = useState({}), handleInputChange = (event) => {
    let { name, value } = event.target;
    console.log(`Nombre: ${name}, Valor: ${value}`), setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value ? isNaN(Number(value)) ? value : Number(value) : void 0
    }));
  }, initialFilters = {
    title: "",
    opportunityTypeId: 0,
    localityId: 0,
    institutionId: 0,
    sectorId: 0,
    status: "",
    publicationDate: "",
    expirationDate: "",
    price: void 0
  }, resetFilters = () => {
    setFilters(initialFilters), onFilterChange(initialFilters);
  };
  return /* @__PURE__ */ jsxs("div", {
    children: [
      /* @__PURE__ */ jsx("h4", { className: "text-center text-3xl font-bold text-white bg-gray-300 py-2", children: "Filtro Oportunidades" }),
      /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded shadow-md h-full sticky top-0", children: /* @__PURE__ */ jsxs("form", {
        children: [
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "keyword",
                  className: "block text-gray-700 font-medium",
                  children: "Palabra clave"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "title",
                  value: filters.title ?? "",
                  placeholder: "Buscar t\xEDtulo",
                  onChange: handleInputChange,
                  className: "bg-gray-200 text-gray-700 p-2 rounded-md w-full"
                }
              )
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "Opportunity_types",
                  className: "block text-gray-700 font-medium",
                  children: "Tipo de Oportunidad"
                }
              ),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "opportunityTypeId",
                  value: filters.opportunityTypeId ?? "",
                  onChange: handleInputChange,
                  className: "bg-gray-200 text-gray-700 p-2 rounded-md w-full",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Tipo de oportunidad" }),
                    /* @__PURE__ */ jsx("option", { value: "1", children: "Educaci\xF3n Superior" }),
                    /* @__PURE__ */ jsx("option", { value: "2", children: "Becas y Ayudas Financieras" }),
                    /* @__PURE__ */ jsx("option", { value: "3", children: "Empleabilidad y Pr\xE1cticas" }),
                    /* @__PURE__ */ jsx("option", { value: "4", children: "Emprendimiento e Innovaci\xF3n" }),
                    /* @__PURE__ */ jsx("option", { value: "5", children: "Capacitaci\xF3n y Desarrollo Profesional" }),
                    /* @__PURE__ */ jsx("option", { value: "6", children: "Bienestar y Apoyo Estudiantil" })
                  ]
                }
              )
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "institutions",
                  className: "block text-gray-700 font-medium",
                  children: "Instituciones"
                }
              ),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "institutionId",
                  value: filters.institutionId ?? "",
                  onChange: handleInputChange,
                  className: "bg-gray-200 text-gray-700 p-2 rounded-md w-full",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Instituciones" }),
                    /* @__PURE__ */ jsx("option", { value: "1", children: "Universidad de Antioquia" }),
                    /* @__PURE__ */ jsx("option", { value: "2", children: "Universidad Nacional (Sede Medell\xEDn)" }),
                    /* @__PURE__ */ jsx("option", { value: "3", children: "Universidad de Medell\xEDn" }),
                    /* @__PURE__ */ jsx("option", { value: "4", children: "Universidad EAFIT" }),
                    /* @__PURE__ */ jsx("option", { value: "5", children: "Universidad Pontificia Bolivariana" }),
                    /* @__PURE__ */ jsx("option", { value: "6", children: "Instituci\xF3n Universitaria Pascual Bravo" }),
                    /* @__PURE__ */ jsx("option", { value: "7", children: "Tecnol\xF3gico de Antioquia" }),
                    /* @__PURE__ */ jsx("option", { value: "8", children: "Instituci\xF3n Universitaria ITM" }),
                    /* @__PURE__ */ jsx("option", { value: "9", children: "Polit\xE9cnico Jaime Isaza Cadavid" }),
                    /* @__PURE__ */ jsx("option", { value: "10", children: "Servicio Nacional de Aprendizaje (SENA)" })
                  ]
                }
              )
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "sectors",
                  className: "block text-gray-700 font-medium",
                  children: "Sectores"
                }
              ),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "sectorId",
                  value: filters.sectorId ?? "",
                  onChange: handleInputChange,
                  className: "bg-gray-200 text-gray-700 p-2 rounded-md w-full",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Sectores" }),
                    /* @__PURE__ */ jsx("option", { value: "1", children: "Administrativo" }),
                    /* @__PURE__ */ jsx("option", { value: "2", children: "Energ\xEDa" }),
                    /* @__PURE__ */ jsx("option", { value: "3", children: "Social" }),
                    /* @__PURE__ */ jsx("option", { value: "4", children: "Agropecuario" }),
                    /* @__PURE__ */ jsx("option", { value: "5", children: "Formaci\xF3n" }),
                    /* @__PURE__ */ jsx("option", { value: "6", children: "Transporte" }),
                    /* @__PURE__ */ jsx("option", { value: "7", children: "Alimentos" }),
                    /* @__PURE__ */ jsx("option", { value: "8", children: "Industria" }),
                    /* @__PURE__ */ jsx("option", { value: "9", children: "Tecnolog\xEDa" }),
                    /* @__PURE__ */ jsx("option", { value: "10", children: "Turismo" }),
                    /* @__PURE__ */ jsx("option", { value: "11", children: "Comercio" }),
                    /* @__PURE__ */ jsx("option", { value: "12", children: "Moda y Belleza" }),
                    /* @__PURE__ */ jsx("option", { value: "13", children: "Salud" }),
                    /* @__PURE__ */ jsx("option", { value: "14", children: "Construcci\xF3n" }),
                    /* @__PURE__ */ jsx("option", { value: "15", children: "Servicio al Cliente" }),
                    /* @__PURE__ */ jsx("option", { value: "16", children: "Sustentabilidad" })
                  ]
                }
              )
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "localities",
                  className: "block text-gray-700 font-medium",
                  children: "Ubicaci\xF3n"
                }
              ),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "localityId",
                  value: filters.localityId ?? "",
                  onChange: handleInputChange,
                  className: "bg-gray-200 text-gray-700 p-2 rounded-md w-full",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Ubicaci\xF3n" }),
                    /* @__PURE__ */ jsx("option", { value: "1", children: "Medell\xEDn" }),
                    /* @__PURE__ */ jsx("option", { value: "2", children: "Bello" }),
                    /* @__PURE__ */ jsx("option", { value: "3", children: "Envigado" }),
                    /* @__PURE__ */ jsx("option", { value: "4", children: "Itag\xFC\xED" }),
                    /* @__PURE__ */ jsx("option", { value: "5", children: "Bogot\xE1" }),
                    /* @__PURE__ */ jsx("option", { value: "6", children: "Cali" }),
                    /* @__PURE__ */ jsx("option", { value: "7", children: "Barranquilla" }),
                    /* @__PURE__ */ jsx("option", { value: "8", children: "Cartagena" }),
                    /* @__PURE__ */ jsx("option", { value: "9", children: "Bucaramanga" }),
                    /* @__PURE__ */ jsx("option", { value: "10", children: "Pereira" }),
                    /* @__PURE__ */ jsx("option", { value: "11", children: "Armenia" }),
                    /* @__PURE__ */ jsx("option", { value: "12", children: "Manizales" }),
                    /* @__PURE__ */ jsx("option", { value: "13", children: "Ibagu\xE9" }),
                    /* @__PURE__ */ jsx("option", { value: "14", children: "Pasto" }),
                    /* @__PURE__ */ jsx("option", { value: "15", children: "Neiva" }),
                    /* @__PURE__ */ jsx("option", { value: "16", children: "Villavicencio" }),
                    /* @__PURE__ */ jsx("option", { value: "17", children: "C\xFAcuta" }),
                    /* @__PURE__ */ jsx("option", { value: "18", children: "Valledupar" }),
                    /* @__PURE__ */ jsx("option", { value: "19", children: "Santa Marta" }),
                    /* @__PURE__ */ jsx("option", { value: "20", children: "Tunja" }),
                    /* @__PURE__ */ jsx("option", { value: "21", children: "Sincelejo" }),
                    /* @__PURE__ */ jsx("option", { value: "22", children: "Monter\xEDa" }),
                    /* @__PURE__ */ jsx("option", { value: "23", children: "Popay\xE1n" }),
                    /* @__PURE__ */ jsx("option", { value: "24", children: "Yopal" }),
                    /* @__PURE__ */ jsx("option", { value: "25", children: "San Jos\xE9 del Guaviare" }),
                    /* @__PURE__ */ jsx("option", { value: "26", children: "Leticia" }),
                    /* @__PURE__ */ jsx("option", { value: "27", children: "Quibd\xF3" }),
                    /* @__PURE__ */ jsx("option", { value: "28", children: "Arauca" }),
                    /* @__PURE__ */ jsx("option", { value: "29", children: "In\xEDrida" }),
                    /* @__PURE__ */ jsx("option", { value: "30", children: "Mit\xFA" }),
                    /* @__PURE__ */ jsx("option", { value: "31", children: "Puerto Carre\xF1o" }),
                    /* @__PURE__ */ jsx("option", { value: "32", children: "San Andr\xE9s" })
                  ]
                }
              )
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "publicationDate",
                  className: "block text-gray-700 font-medium",
                  children: "Fecha de apertura"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "date",
                  name: "publicationDate",
                  value: filters.publicationDate ?? "",
                  onChange: handleInputChange,
                  className: "bg-gray-200 text-gray-700 p-2 rounded-md w-full appearance-none"
                }
              )
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "expirationDate",
                  className: "block text-gray-700 font-medium",
                  children: "Fecha de cierre"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "date",
                  name: "expirationDate",
                  value: filters.expirationDate ?? "",
                  onChange: handleInputChange,
                  className: "bg-gray-200 text-gray-700 p-2 rounded-md w-full appearance-none"
                }
              )
            ]
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "flex justify-end mt-4",
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "mr-4 bg-gray-600 text-white px-4 py-2 rounded",
                  onClick: resetFilters,
                  children: "Restablecer"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: "bg-indigo-600 text-white px-4 py-2 rounded",
                  onClick: () => onFilterChange(filters),
                  children: "Aplicar"
                }
              )
            ]
          })
        ]
      }) })
    ]
  });
}, loader$4 = async () => {
  let opportunities = await getOpportunities();
  return console.log(opportunities), json({ opportunities });
};
function Opportunities() {
  let { opportunities } = useLoaderData(), [searchParams, setSearchParams] = useSearchParams(), [filters, setFilters] = useState({
    title: "",
    opportunityTypeId: 0,
    localityId: 0,
    institutionId: 0,
    sectorId: 0,
    status: "",
    publicationDate: "",
    expirationDate: "",
    price: void 0
  }), handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  }, [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  ), pageSize = 10, filteredOpportunities = opportunities.filter((opportunity) => {
    let expirationDateFilter = filters.expirationDate ? new Date(filters.expirationDate) : null, publicationDateFilter = filters.publicationDate ? new Date(filters.publicationDate) : null, opportunityExpirationDate = opportunity.expirationDate ? new Date(opportunity.expirationDate) : null, opportunityPublicationDate = opportunity.publicationDate ? new Date(opportunity.publicationDate) : null;
    return (!filters.title || opportunity.title.toLowerCase().includes(filters.title.toLowerCase())) && (!filters.opportunityTypeId || opportunity.opportunityTypeId === Number(filters.opportunityTypeId)) && (!filters.localityId || opportunity.localityId === Number(filters.localityId)) && (!filters.institutionId || opportunity.institutionId === Number(filters.institutionId)) && (!filters.sectorId || opportunity.sectorId === Number(filters.sectorId)) && (!filters.status || opportunity.status === filters.status) && (!expirationDateFilter || opportunityExpirationDate && opportunityExpirationDate.toISOString().split("T")[0] === expirationDateFilter.toISOString().split("T")[0]) && (!publicationDateFilter || opportunityPublicationDate && opportunityPublicationDate.toISOString().split("T")[0] === publicationDateFilter.toISOString().split("T")[0]) && (!filters.price || opportunity.price <= filters.price);
  }), paginatedOpportunities = filteredOpportunities.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-col min-h-screen bg-gray-100 pb-20",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex-grow flex flex-col md:flex-row p-6 gap-4",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/4 p-4 bg-white shadow-lg rounded-xl md:sticky md:top-4 md:self-start md:h-[calc(100vh-2rem)] overflow-y-auto", children: /* @__PURE__ */ jsx(OpportunityFilter, { onFilterChange: handleFilterChange }) }),
          /* @__PURE__ */ jsx("div", { className: "w-full md:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 justify-center", children: paginatedOpportunities.length > 0 ? paginatedOpportunities.map((opportunity) => /* @__PURE__ */ jsx(OpportunityCard, { opportunity }, opportunity.id)) : /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "No se encontraron oportunidades." }) })
        ]
      }),
      /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalItems: filteredOpportunities.length,
          pageSize,
          onPageChange: (page) => {
            setCurrentPage(page), setSearchParams((prevParams) => {
              let newParams = new URLSearchParams(prevParams);
              return newParams.set("page", String(page)), newParams;
            });
          }
        }
      ),
      /* @__PURE__ */ jsx(FloatingButton, {}),
      /* @__PURE__ */ jsx(ButtonDonateWompi, {}),
      /* @__PURE__ */ jsx(ButtonGoUp, {})
    ]
  });
}
var route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Opportunities,
  loader: loader$4
// eslint-disable-next-line react/prop-types
}, Symbol.toStringTag, { value: "Module" })), Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
// eslint-disable-next-line react/prop-types
var CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
// eslint-disable-next-line react/prop-types
var CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
// eslint-disable-next-line react/prop-types
var CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
// eslint-disable-next-line react/prop-types
var CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
// eslint-disable-next-line react/prop-types
var CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function StatCard({ title, count, icon, link }) {
  let navigate = useNavigate$1();
  return /* @__PURE__ */ jsxs(
    Card,
    {
      onClick: () => navigate(link),
      className: `cursor-pointer p-6 flex items-center justify-between shadow dark:shadow-[0_1px_4px_rgba(255,255,255,0.1)]\r
hover:shadow-xl hover:dark:shadow-[0_2px_10px_rgba(255,255,255,0.3)] transition rounded-2xl  bg-white dark:bg-neutral-600`,
      children: [
        /* @__PURE__ */ jsxs("div", {
          children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-gray-500 uppercase mb-1 dark:text-white", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-800 dark:text-white", children: count })
          ]
        }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-4xl dark:text-white", children: icon })
      ]
    }
  );
}
function AdminIndex() {
  let [stats, setStats] = useState({
    users: 0,
    opportunities: 0,
    institutions: 0,
    services: 0,
    serviceTypes: 0,
    opportunityTypes: 0,
    sectors: 0
  });
  useEffect(() => {
    (async () => {
      try {
        let endpoints = [
          { key: "users", url: "/api/v1/user" },
          { key: "opportunities", url: "/api/v1/opportunity" },
          { key: "institutions", url: "/api/v1/institution" },
          { key: "services", url: "/api/v1/services" },
          { key: "serviceTypes", url: "/api/ServiceTypes" },
          { key: "opportunityTypes", url: "/api/v1/opportunity-type" },
          { key: "sectors", url: "/api/v1/sectors" }
        ], results = await Promise.all(
          endpoints.map(async (ep) => {
            let res = await fetch(`http://localhost:5055${ep.url}`, {
              credentials: "include"
            });
            if (!res.ok)
              return console.warn(`Error al obtener ${ep.url}: ${res.status}`), [];
            try {
              let data = await res.json();
              return Array.isArray(data) ? data : data.data || [];
            } catch {
              return [];
            }
          })
        ), newStats = {
          users: 0,
          opportunities: 0,
          institutions: 0,
          services: 0,
          serviceTypes: 0,
          opportunityTypes: 0,
          sectors: 0
        };
        endpoints.forEach((ep, i) => {
          newStats[ep.key] = Array.isArray(results[i]) ? results[i].length : 0;
        }), setStats(newStats);
      } catch (err) {
        console.error("Error cargando estad\xEDsticas", err);
      }
    })();
  }, []);
  let cards = [
    {
      title: "Usuarios",
      count: stats.users,
      icon: /* @__PURE__ */ jsx(Users, {}),
      link: "/admin/users"
    },
    {
      title: "Oportunidades",
      count: stats.opportunities,
      icon: /* @__PURE__ */ jsx(Briefcase, {}),
      link: "/admin/opportunities"
    },
    {
      title: "Instituciones",
      count: stats.institutions,
      icon: /* @__PURE__ */ jsx(Building, {}),
      link: "/admin/institutions"
    },
    {
      title: "Servicios",
      count: stats.services,
      icon: /* @__PURE__ */ jsx(Layers, {}),
      link: "/admin/services"
    },
    {
      title: "Tipos de Servicio",
      count: stats.serviceTypes,
      icon: /* @__PURE__ */ jsx(ClipboardList, {}),
      link: "/admin/service-types"
    },
    {
      title: "Tipos de Oportunidad",
      count: stats.opportunityTypes,
      icon: /* @__PURE__ */ jsx(FolderCog, {}),
      link: "/admin/opportunity-types"
    },
    {
      title: "Sectores",
      count: stats.sectors,
      icon: /* @__PURE__ */ jsx(Network, {}),
      link: "/admin/sectors"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: cards.map((card, idx) => /* @__PURE__ */ jsx(StatCard, { ...card }, idx)) });
}
var route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminIndex
}, Symbol.toStringTag, { value: "Module" }));
function useCurrentUserEmail() {
  let root = useMatches().find((m) => m.id === "root"), data = root?.data;
  return data?.email ?? null;
}
function AdminUsers() {
  var _a;
  let [users, setUsers] = useState([]), [loading, setLoading] = useState(!0), [editUser, setEditUser] = useState(null), [deleteUserId, setDeleteUserId] = useState(null), currentUserEmail = useCurrentUserEmail(), [searchParams, setSearchParams] = useSearchParams(), [searchTerm, setSearchTerm] = useState(""), [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  ), [pageSize, setPageSize] = useState(
    Number(searchParams.get("pageSize")) || 14
  );
  useEffect(() => {
    let newPageSize = Number(searchParams.get("pageSize")) || 14;
    setPageSize(newPageSize);
  }, [searchParams]);
  let fetchUsers = async () => {
    setLoading(!0);
    try {
      let data = await (await fetch("http://localhost:5055/api/v1/user", {
        credentials: "include"
      })).json();
      setUsers(data);
    } catch (err) {
      console.error("Error al cargar usuarios", err);
    } finally {
      setLoading(!1);
    }
  }, toggleUserStatus = async (id, current) => {
    try {
      await fetch(`http://localhost:5055/api/v1/user/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ isActive: !current })
      }), setUsers(
        (prev) => prev.map((u) => u.id === id ? { ...u, isActive: !current } : u)
      );
    } catch (err) {
      console.error("Error al cambiar estado", err);
    }
  }, confirmDeleteUser = async () => {
    if (deleteUserId)
      try {
        await fetch(`http://localhost:5055/api/v1/user/${deleteUserId}`, {
          method: "DELETE",
          credentials: "include"
        }), setDeleteUserId(null), fetchUsers();
      } catch (err) {
        console.error("Error al eliminar usuario", err);
      }
  }, saveUserEdits = async () => {
    if (editUser)
      try {
        await fetch(`http://localhost:5055/api/v1/user/${editUser.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(editUser)
        }), setEditUser(null), fetchUsers();
      } catch (err) {
        console.error("Error al editar usuario", err);
      }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  let paginatedUsers = [...users].sort((a, b) => a.email === currentUserEmail ? -1 : b.email === currentUserEmail ? 1 : 0).filter((user) => {
    var _a2, _b;
    let term = searchTerm.toLowerCase();
    return user.fullName.toLowerCase().includes(term) || user.email.toLowerCase().includes(term) || user.role.toLowerCase().includes(term) || ((_a2 = user.phone) == null ? void 0 : _a2.toLowerCase().includes(term)) || ((_b = user.birthdate) == null ? void 0 : _b.toLowerCase().includes(term));
  }).slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return /* @__PURE__ */ jsxs("div", {
    children: [
      loading ? /* @__PURE__ */ jsx("p", { className: "text-4xl", children: "Cargando usuarios..." }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Buscar usuario por cualquier campo...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: "w-full md:w-1/2"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-auto", children: /* @__PURE__ */ jsxs("table", {
            className: "min-w-full bg-white dark:bg-neutral-600  shadow-md rounded-md",
            children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
                className: "bg-gray-100 text-left dark:text-black",
                children: [
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Nombre" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Email" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Tel\xE9fono" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Rol" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Nacimiento" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Activo" }),
                  /* @__PURE__ */ jsx("th", { className: "p-2", children: "Acciones" })
                ]
              }) }),
              /* @__PURE__ */ jsx("tbody", { children: paginatedUsers.map((user) => {
                var _a2;
                let isCurrentUser = user.email === currentUserEmail;
                return /* @__PURE__ */ jsxs("tr", {
                  className: "border-t",
                  children: [
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: user.fullName }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: user.email }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: user.phone ?? "-" }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: user.role }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: ((_a2 = user.birthdate) == null ? void 0 : _a2.split("T")[0]) ?? "" }),
                    /* @__PURE__ */ jsx("td", { className: "p-2", children: !isCurrentUser && /* @__PURE__ */ jsx(
                      Switch,
                      {
                        checked: user.isActive,
                        onChange: () => toggleUserStatus(user.id, user.isActive),
                        className: `${user.isActive ? "bg-green-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`,
                        children: /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: `${user.isActive ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`
                          }
                        )
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("td", {
                      className: "p-2 flex gap-2",
                      children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            size: "sm",
                            variant: "outline",
                            onClick: () => setEditUser(user),
                            children: /* @__PURE__ */ jsx(Pencil, { size: 16 })
                          }
                        ),
                        !isCurrentUser && /* @__PURE__ */ jsx(
                          Button,
                          {
                            size: "sm",
                            variant: "destructive",
                            onClick: () => setDeleteUserId(user.id),
                            children: /* @__PURE__ */ jsx(Trash2, { size: 16 })
                          }
                        )
                      ]
                    })
                  ]
                }, user.id);
              }) })
            ]
          }) }),
          /* @__PURE__ */ jsx(
            Pagination,
            {
              currentPage,
              totalItems: users.length,
              pageSize,
              onPageChange: (page) => {
                setCurrentPage(page), setSearchParams((prev) => {
                  let next = new URLSearchParams(prev);
                  return next.set("page", String(page)), next;
                });
              }
            }
          )
        ]
      }),
      /* @__PURE__ */ jsx(Dialog, { open: !!editUser, onOpenChange: () => setEditUser(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        "aria-describedby": "edit-user-description",
        children: [
          /* @__PURE__ */ jsxs(DialogHeader, {
            children: [
              /* @__PURE__ */ jsx(DialogTitle, { children: "Editar Usuario" }),
              /* @__PURE__ */ jsx(DialogDescription, { id: "edit-user-description", children: "Modifica los campos y guarda los cambios para este usuario." })
            ]
          }),
          editUser && /* @__PURE__ */ jsxs("form", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { children: "Nombre completo" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      value: editUser.fullName,
                      onChange: (e) => setEditUser((prev) => ({
                        ...prev,
                        fullName: e.target.value
                      }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { children: "Email" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "email",
                      value: editUser.email,
                      onChange: (e) => setEditUser((prev) => ({ ...prev, email: e.target.value }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { children: "Tel\xE9fono" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      value: editUser.phone ?? "",
                      onChange: (e) => setEditUser((prev) => ({ ...prev, phone: e.target.value }))
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { children: "Rol" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      className: "w-full border border-gray-300 rounded px-2 py-1 bg-white",
                      value: editUser.role,
                      onChange: (e) => setEditUser((prev) => ({ ...prev, role: e.target.value })),
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "admin", children: "Administrador" }),
                        /* @__PURE__ */ jsx("option", { value: "user", children: "Estudiante" })
                      ]
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                children: [
                  /* @__PURE__ */ jsx(Label, { children: "Fecha de nacimiento" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "date",
                      value: ((_a = editUser.birthdate) == null ? void 0 : _a.split("T")[0]) ?? "",
                      onChange: (e) => setEditUser((prev) => ({
                        ...prev,
                        birthdate: e.target.value
                      }))
                    }
                  )
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { onClick: () => setEditUser(null), variant: "outline", children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: saveUserEdits, children: "Guardar" })
            ]
          })
        ]
      }) }),
      /* @__PURE__ */ jsx(Dialog, { open: !!deleteUserId, onOpenChange: () => setDeleteUserId(null), children: /* @__PURE__ */ jsxs(DialogContent, {
        "aria-describedby": "delete-user-description",
        children: [
          /* @__PURE__ */ jsxs(DialogHeader, {
            children: [
              /* @__PURE__ */ jsx(DialogTitle, { children: "\xBFEliminar usuario?" }),
              /* @__PURE__ */ jsx(DialogDescription, { id: "delete-user-description", children: "Esta acci\xF3n es irreversible. \xBFDeseas continuar?" })
            ]
          }),
          /* @__PURE__ */ jsxs(DialogFooter, {
            children: [
              /* @__PURE__ */ jsx(Button, { onClick: () => setDeleteUserId(null), variant: "outline", children: "Cancelar" }),
              /* @__PURE__ */ jsx(Button, { onClick: confirmDeleteUser, variant: "destructive", children: "Eliminar" })
            ]
          })
        ]
      }) })
    ]
  });
}
var route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminUsers
}, Symbol.toStringTag, { value: "Module" })), loader$3 = () => redirect("/auth/login"), route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
function LoginForm({ actionData }) {
  var _a, _b;
  let [email, setEmail] = useState(""), [password, setPassword] = useState("");
  return /* @__PURE__ */ jsxs(
    Form,
    {
      method: "post",
      className: "flex flex-col items-center text-gray-500 w-full h-full px-12 gap-6",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-start w-full relative",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Correo",
                autoComplete: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: `outline-none rounded-lg bg-white border border-gray-400 px-3 py-1 w-full \r
            appearance-auto focus:outline-none focus:ring-2 focus:ring-[#7C78B3] \r
            text-gray-700 placeholder-gray-500`
              }
            ),
            ((_a = actionData?.fieldErrors) == null ? void 0 : _a.email) && /* @__PURE__ */ jsx("p", { className: "text-red-500 absolute top-9 text-[10px] md:top-8 md:text-base", children: actionData.fieldErrors.email })
          ]
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-col items-start w-full relative",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "password",
                name: "password",
                placeholder: "Contrase\xF1a",
                autoComplete: "current-password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                className: `outline-none rounded-lg bg-white border border-gray-400 px-3 py-1 w-full \r
            appearance-auto focus:outline-none focus:ring-2 focus:ring-[#7C78B3] \r
            text-gray-700 placeholder-gray-500`
              }
            ),
            ((_b = actionData?.fieldErrors) == null ? void 0 : _b.password) && /* @__PURE__ */ jsx("p", { className: "text-red-500 absolute top-9 text-[10px] md:top-8 md:text-base", children: actionData.fieldErrors.password })
          ]
        }),
        /* @__PURE__ */ jsx("div", { className: "h-2", children: actionData?.error && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: actionData.error }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 rounded-lg w-full bg-[#7C78B3] text-white",
            children: "Ingresar"
          }
        )
      ]
    }
  );
}
var define_process_env_default = {};
async function loader$2({ request }) {
  let cookieHeader = request.headers.get("Cookie");
  return await authToken.parse(cookieHeader) ? redirect("/admin") : null;
}
var action = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  if (typeof email != "string" || typeof password != "string")
    return json({ error: "Datos inv\xE1lidos." }, { status: 400 });
  let response = await fetch("http://localhost:5055/api/v1/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password })
  }), data = await response.json();
  if (!response.ok)
    return json({ error: data?.message ?? "Login fallido" }, { status: 401 });
  let destination = data?.role === "admin" ? "/admin/index" : "/user-dashboard", headers = new Headers();
  return headers.append(
    "Set-Cookie",
    `authToken=${data.token}; Path=/; HttpOnly; SameSite=Lax${define_process_env_default.NODE_ENV === "production" ? "; Secure" : ""}`
  ), headers.append("Set-Cookie", await userRole.serialize(data.role)), headers.append("Set-Cookie", await userEmail.serialize(data.email)), redirect(destination, { headers });
};
function LoginPage() {
  let actionData = useActionData();
  return /* @__PURE__ */ jsx(LoginForm, { actionData });
}
var route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: LoginPage,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" })), ContactForm = ({ className }) => {
  let [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requestType: "",
    comments: ""
  }), [errors, setErrors] = useState({}), [submitted, setSubmitted] = useState(!1), validateForm = () => {
    let newErrors = {};
    return formData.name.trim() || (newErrors.name = "El nombre es requerido"), formData.phone.trim() ? /^\d{10}$/.test(formData.phone) || (newErrors.phone = "El tel\xE9fono debe tener exactamente 10 d\xEDgitos") : newErrors.phone = "El tel\xE9fono es requerido", formData.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || (newErrors.email = "Ingrese un correo electr\xF3nico v\xE1lido") : newErrors.email = "El correo electr\xF3nico es requerido", formData.requestType || (newErrors.requestType = "Por favor seleccione una opci\xF3n"), formData.comments.trim() || (newErrors.comments = "Los comentarios son requeridos"), newErrors;
  }, handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone") {
      let onlyNums = value.replace(/[^0-9]/g, "");
      setFormData({ ...formData, [name]: onlyNums.slice(0, 10) });
    } else
      setFormData({ ...formData, [name]: value });
  }, handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = validateForm();
    Object.keys(newErrors).length === 0 ? (console.log("Formulario enviado:", formData), setSubmitted(!0), setFormData({
      name: "",
      phone: "",
      email: "",
      requestType: "",
      comments: ""
    })) : setErrors(newErrors);
  }, requestTypes = [
    { value: "petition", label: "Petici\xF3n" },
    { value: "complaint", label: "Queja" },
    { value: "claim", label: "Reclamo" },
    { value: "congratulation", label: "Felicitaci\xF3n" },
    { value: "suggestion", label: "Sugerencia" }
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `w-full p-4 rounded-lg shadow-md text-white h-full flex flex-col ${className}`,
      style: {
        background: "linear-gradient(135deg, #2C395B 0%, #06407A 50%, #2C9BC7 100%)"
      },
      children: submitted ? /* @__PURE__ */ jsxs("div", {
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "\xA1Gracias por contactarnos!" }),
          /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Hemos recibido tu mensaje y nos pondremos en contacto pronto." }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSubmitted(!1),
              className: "py-1.5 px-3 rounded font-medium bg-[#32526E] hover:bg-[#222D56] text-white dark:bg-[#7C76B5] dark:hover:bg-[#4D3281]",
              children: "Enviar otro mensaje"
            }
          )
        ]
      }) : /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold mb-4 text-center", children: "Cont\xE1ctanos" }),
          /* @__PURE__ */ jsxs("form", {
            onSubmit: handleSubmit,
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "mb-3",
                children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block font-light mb-1 text-sm", children: "Nombre" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      id: "name",
                      name: "name",
                      value: formData.name,
                      onChange: handleChange,
                      className: `w-full p-1.5 text-sm border bg-white rounded bg-white${errors.name ? "border-red-500" : "border-gray-300"}`,
                      style: { color: "#06407A" }
                    }
                  ),
                  errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.name })
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "mb-3",
                children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block font-light mb-1 text-sm", children: "Tel\xE9fono" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      id: "phone",
                      name: "phone",
                      value: formData.phone,
                      onChange: handleChange,
                      maxLength: 10,
                      className: `w-full p-1.5 text-sm border rounded bg-white  ${errors.phone ? "border-red-500" : "border-gray-300"}`,
                      style: { color: "#021930" }
                    }
                  ),
                  errors.phone && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.phone })
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "mb-3",
                children: [
                  /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block font-light mb-1 text-sm", children: "Correo electr\xF3nico" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      id: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleChange,
                      className: `w-full p-1.5 text-sm border rounded bg-white  ${errors.email ? "border-red-500" : "border-gray-300"}`,
                      style: { color: "#06407A" }
                    }
                  ),
                  errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.email })
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "mb-3",
                children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "requestType",
                      className: "block font-light mb-1 text-sm",
                      children: "Seleccionar"
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      id: "requestType",
                      name: "requestType",
                      value: formData.requestType,
                      onChange: handleChange,
                      className: `w-full p-1.5 text-sm border rounded bg-white text-black font-medium  ${errors.requestType ? "border-red-500" : "border-gray-300"}`,
                      style: { color: "#06407A", fontWeight: "500" },
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "", className: "text-black font-medium", children: "Seleccione una opci\xF3n" }),
                        requestTypes.map((type) => /* @__PURE__ */ jsx(
                          "option",
                          {
                            value: type.value,
                            className: "text-black font-medium",
                            children: type.label
                          },
                          type.value
                        ))
                      ]
                    }
                  ),
                  errors.requestType && /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-xs mt-1 font-medium",
                      style: {
                        color: "#FF0033",
                        textShadow: "0px 0px 1px rgba(255,255,255,0.5)"
                      },
                      children: errors.requestType
                    }
                  )
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "mb-3",
                children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "comments",
                      className: "block font-light mb-1 text-sm",
                      children: "Comentarios"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      id: "comments",
                      name: "comments",
                      value: formData.comments,
                      onChange: handleChange,
                      rows: "3",
                      className: `w-full p-1.5 text-sm border rounded bg-white text-black font-medium dark:bg-[#32526E] dark:border-[#708BC6] ${errors.comments ? "border-red-500" : "border-gray-300"}`,
                      style: { color: "#06407A", fontWeight: "500" }
                    }
                  ),
                  errors.comments && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.comments })
                ]
              }),
              /* @__PURE__ */ jsx("div", { className: "text-center mt-4 mb-2", children: /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: "py-2 px-6 rounded font-medium text-base bg-[#32526E] hover:bg-[#222D56] text-white dark:bg-[#7C76B5] dark:hover:bg-[#4D3281]",
                  children: "Enviar"
                }
              ) })
            ]
          })
        ]
      })
    }
  );
};
ContactForm.propTypes = {
  className: PropTypes.string
};
var meta = () => [
  { title: "Contact Us - Fundaci\xF3n Antivirus para la Deserci\xF3n" },
  {
    name: "description",
    content: "Get in touch with Fundaci\xF3n Antivirus para la Deserci\xF3n"
  }
];
function ContactUs() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen flex flex-col bg-[#DCEBF9] text-[#222D56]",
    children: [
      /* @__PURE__ */ jsx("main", { className: "flex-grow py-8 px-4 md:px-6", children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-5xl mx-auto",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-3xl font-bold text-center mb-4", children: "Cont\xE1ctanos" }),
          /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch",
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-full flex", children: /* @__PURE__ */ jsxs("div", {
                className: "rounded-lg p-4 shadow-md bg-white dark:bg-[#32526E] flex-grow flex flex-col",
                children: [
                  /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-3", children: "Informaci\xF3n de Contacto" }),
                  /* @__PURE__ */ jsx("p", { className: "mb-4 text-base", children: "Estamos aqu\xED para ayudarte con cualquier duda que tengas sobre nuestros programas para reducir la deserci\xF3n escolar en Colombia." }),
                  /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center bg-white flex-grow mt-auto", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/images/antivirus_avatar.png",
                      alt: "Antivirus Avatar",
                      className: "w-3/5 h-auto object-contain mx-auto"
                    }
                  ) })
                ]
              }) }),
              /* @__PURE__ */ jsx("div", { className: "h-full flex", children: /* @__PURE__ */ jsx(ContactForm, { className: "flex-grow" }) })
            ]
          })
        ]
      }) }),
      /* @__PURE__ */ jsx(FloatingButton, {}),
      /* @__PURE__ */ jsx(ButtonDonateWompi, {}),
      /* @__PURE__ */ jsx(ButtonGoUp, {})
    ]
  });
}
var route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactUs,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function Dashboard() {
  return /* @__PURE__ */ jsxs("div", {
    className: "grid grid-cols-1 md:grid-cols-5 min-h-screen",
    children: [
      /* @__PURE__ */ jsxs("aside", {
        className: "col-span-1 md:col-span-1 bg-gray-900 text-white p-4 space-y-4",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Dashboard" }),
          /* @__PURE__ */ jsxs("nav", {
            className: "flex flex-col space-y-2",
            children: [
              /* @__PURE__ */ jsxs(
                Link$1,
                {
                  to: "/",
                  className: "flex items-center gap-2 hover:bg-gray-800 p-2 rounded",
                  children: [
                    /* @__PURE__ */ jsx(Home, { size: 20 }),
                    " Home"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link$1,
                {
                  to: "/stats",
                  className: "flex items-center gap-2 hover:bg-gray-800 p-2 rounded",
                  children: [
                    /* @__PURE__ */ jsx(BarChart2, { size: 20 }),
                    " Estad\xEDsticas"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link$1,
                {
                  to: "/config",
                  className: "flex items-center gap-2 hover:bg-gray-800 p-2 rounded",
                  children: [
                    /* @__PURE__ */ jsx(Settings, { size: 20 }),
                    " Configuraci\xF3n"
                  ]
                }
              )
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsxs("main", {
        className: "col-span-4 p-6 space-y-6",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Bienvenido" }),
          /* @__PURE__ */ jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: [
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
                className: "p-4",
                children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Usuarios" }),
                  /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "124" })
                ]
              }) }),
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
                className: "p-4",
                children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Visitas" }),
                  /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "2,345" })
                ]
              }) }),
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, {
                className: "p-4",
                children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Tickets activos" }),
                  /* @__PURE__ */ jsx("p", { className: "text-2xl", children: "17" })
                ]
              }) })
            ]
          }),
          /* @__PURE__ */ jsx(Button, { className: "mt-4", children: "Ver m\xE1s detalles" })
        ]
      })
    ]
  });
}
function Profile() {
  return /* @__PURE__ */ jsx(Dashboard, {});
}
var route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Profile
}, Symbol.toStringTag, { value: "Module" })), loader$1 = async () => redirect("/auth/login", {
  headers: {
    "Set-Cookie": await authToken.serialize("", {
      maxAge: 0
    })
  }
}), route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" })), HomeBanner = "/assets/home-fundacion-antivirus-BJ1Lnqa8.png", getAllInstitutions = async () => {
  try {
    let response = await fetch("http://localhost:5055/api/v1/institution");
    if (!response.ok)
      throw new Error("Network response was not ok");
    return response.json();
  } catch (error) {
    throw console.error("Error fetching data:", error), error;
  }
}, institutionToCardInfoProps = ({
  id,
  name,
  image,
  information
}) => ({
  id,
  urlImg: image,
  title: name,
  description: information
}), getAllOurServices = async () => {
  try {
    let response = await fetch("http://localhost:5055/api/v1/services");
    if (!response.ok)
      throw new Error("Network response was not ok");
    return response.json();
  } catch (error) {
    throw console.error("Error fetching data:", error), error;
  }
}, ourServiceResponseToCardInfoProps = ({
  id,
  isActive,
  title,
  description,
  image
}) => {
  if (isActive)
    return {
      id,
      urlImg: image,
      title,
      description
    };
}, teamMembers = [
  {
    name: "Carlos V\xE1squez Restrepo",
    role: "Presidente",
    image: "/images/carlos_vasquez.jpg"
  },
  {
    name: "Astrid Franco",
    role: "Coordinadora \xC1rea Social",
    image: "/images/astrid_franco.jpg"
  },
  {
    name: "Luis Fernando S\xE1nchez",
    role: "Director",
    image: "/images/luis_sanchez.jpg"
  },
  {
    name: "Karen Gonz\xE1lez",
    role: "Coordinadora \xC1rea de Tecnolog\xEDa y Dato",
    image: "/images/karen_gonzalez.jpg"
  },
  {
    name: "V\xEDctor Manuel Valencia",
    role: "Subdirector",
    image: "/images/victor_valencia.jpg"
  },
  {
    name: "David Santiago Botero",
    role: "Coordinador \xC1rea Legal",
    image: "/images/david_botero.jpg"
  },
  {
    name: "Manuela Correa Quintero",
    role: "Coordinador de comunicaciones",
    image: "/images/manuela_correa.jpg"
  },
  {
    name: "Luis Fernando Gonz\xE1lez",
    role: "Coordinador \xC1rea Administrativa y Financiera",
    image: "/images/luis_gonzalez.jpg"
  }
];
function NuestroEquipo() {
  return /* @__PURE__ */ jsxs("div", {
    id: "OurTeam",
    className: "flex flex-col text-gray-900",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "fmax-w-4xl mx-auto text-center mb-4",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[black] text-[40px] font-bold text-center", children: "Nuestro Equipo" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 leading-relaxed", children: "Conoce a las personas que hacen posible nuestra misi\xF3n, trabajando con compromiso y dedicaci\xF3n." })
        ]
      }),
      /* @__PURE__ */ jsx("div", { className: "max-w-full mx-auto px-6 py-4 mt-[-20px]", children: /* @__PURE__ */ jsx(
        Carousel,
        {
          showArrows: !0,
          infiniteLoop: !0,
          autoPlay: !0,
          interval: 3e3,
          showThumbs: !1,
          showStatus: !1,
          emulateTouch: !0,
          dynamicHeight: !1,
          children: teamMembers.map((member, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-col items-center bg-white rounded-lg shadow-lg p-6",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-40 h-40 overflow-hidden rounded-full border-4 border-green-700", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: member.image,
                    alt: member.name,
                    className: "w-full h-full object-contain"
                  }
                ) }),
                /* @__PURE__ */ jsx("h3", { className: "mt-4 text-xl font-bold", children: member.name }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-700 italic", children: member.role })
              ]
            },
            index
          ))
        }
      ) })
    ]
  });
}

function CardInfo({ id, urlImg, title, description }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: String(id),
      className: "shadow-[0_4px_12px_rgba(0,0,0,0.2)] bg-[white] rounded-[10px] max-w-[450px] py-[25px] px-[35px] flex flex-col items-center text-center my-[40px] mx-[20px]",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: urlImg,
            alt: title,
            className: "w-[250px] h-[250px] object-cover rounded-[10px]"
          }
        ),
        /* @__PURE__ */ jsx("h4", { className: "text-black mt-[18px] mb-[28px] font-bold text-[20px] min-h-[90px]", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-black text-center text-[18px] overflow-hidden text-ellipsis h-[130px]", children: description })
      ]
    }
  );
}
function SliderCardInfo({ cards }) {
  return /* @__PURE__ */ jsx("div", {
    className: "w-full max-w-full mx-auto text-left",
    children: /* @__PURE__ */ jsx("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4",
      children: cards.map((cardInfo) =>
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex justify-center",
            children: /* @__PURE__ */ jsx(CardInfo, { ...cardInfo })
          },
          cardInfo.id
        )
      )
    })
  });
}

function Index() {
  useEffect(() => {
    console.log("Cargando _index.tsx");
  }, []);
  let [institutions, setInstitutions] = useState([]), [ourServices, setOurServices] = useState([]), getAllInitialInfo = async () => {
    try {
      let institutionsResponse = await getAllInstitutions(), ourServicesResponse = await getAllOurServices();
      setInstitutions(institutionsResponse.map(institutionToCardInfoProps)), setOurServices(
        ourServicesResponse.map(ourServiceResponseToCardInfoProps).filter((item) => item !== void 0)
      );
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  };
  return useEffect(() => {
    getAllInitialInfo();
  }, []), /* @__PURE__ */ jsxs("div", {
    id: "home",
    children: [
      /* @__PURE__ */ jsx("section", { className: "w-full max-h-[100vh] overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: HomeBanner,
          alt: "Banner",
          className: "w-full h-auto object-cover max-h-[100vh]"
        }
      ) }),
      /* @__PURE__ */ jsxs(
        "section",
        {
          id: "institutions",
          className: "bg-[--color-light-blue] p-6 lg:p-24",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-black text-3xl lg:text-4xl font-bold text-center", children: "Instituciones aliadas" }),
            institutions.length > 0 ? /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4", children: institutions.map((institution) => /* @__PURE__ */ jsx(
              "div",
              {
                className: `p-4 flex justify-center items-center border border-gray-300 shadow-lg rounded-lg aspect-[3/2] 
            ${[2, 8, 9].includes(institution.id) ? "bg-gray-400" : "bg-white"}`,
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: institution.urlImg,
                    alt: institution.title,
                    className: "max-w-[80%] max-h-[70%] object-contain"
                  }
                )
              },
              institution.id
            )) }) : /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600 mt-4", children: "Cargando instituciones..." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { id: "our-services", className: "bg-[white] p-[20px] lg:p-[110px]", children: /* @__PURE__ */ jsx("div", { className: "mt-[10px] text-center lg:mt-[76px]", children: /* @__PURE__ */ jsx(NuestroEquipo, {}) }) }),
      /* @__PURE__ */ jsxs("section", {
        id: "our-team",
        className: "bg-[white] p-[20px] lg:p-[110px]",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[black] text-[40px] font-bold text-center", children: "Nuestros servicios" }),
          /* @__PURE__ */ jsx("div", { className: "mt-[10px] text-center lg:mt-[76px]", children: /* @__PURE__ */ jsx(SliderCardInfo, { cards: ourServices }) })
        ]
      }),
      /* @__PURE__ */ jsxs("section", {
        id: "contact-form",
        className: "bg-[#F5F5F5] p-[20px] lg:p-[110px]",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[black] text-[40px] font-bold text-center", children: "Cont\xE1ctanos" }),
          /* @__PURE__ */ jsx("div", { className: "mt-[10px] lg:mt-[76px] max-w-[800px] mx-auto", children: /* @__PURE__ */ jsx(ContactForm, {}) })
        ]
      })
    ]
  });
}
var route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
function AuthRouteLayout() {
  return /* @__PURE__ */ jsx(AuthLayout, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
var route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AuthRouteLayout
}, Symbol.toStringTag, { value: "Module" }));
async function loader({ request }) {
  let cookieHeader = request.headers.get("Cookie"), token = await authToken.parse(cookieHeader), role = await userRole.parse(cookieHeader);
  return !token || role !== "admin" ? redirect("/auth/login") : null;
}
var route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader
}, Symbol.toStringTag, { value: "Module" })), serverManifest = { entry: { module: "/assets/entry.client-DQv-ZUJO.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/index-Dd0htAhA.js", "/assets/index-BIRfPpac.js", "/assets/components-BVzGLikV.js"], css: [] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0, module: "/assets/root-DMQUMLux.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/index-Dd0htAhA.js", "/assets/index-BIRfPpac.js", "/assets/components-BVzGLikV.js", "/assets/button-whatsapp-I4_cGjAj.js", "/assets/auth-layout-ChOUDUC_.js", "/assets/x-BAMesz7e.js", "/assets/house-CSaD2rl8.js", "/assets/createLucideIcon-DYtkCQUn.js", "/assets/users-MlFErIGE.js", "/assets/404-DTH1LP_q.js", "/assets/store-DCUB6VLK.js"], css: ["/assets/root-s2dkQWhW.css", "/assets/global-Ck0ywxwr.css", "/assets/auth-layout-C2Xcg7EW.css"] }, "routes/admin.opportunity-types": { id: "routes/admin.opportunity-types", parentId: "routes/admin", path: "opportunity-types", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/admin.opportunity-types-Cwsj7-3T.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/button-vq5mvpSL.js", "/assets/label-DrQ3MxNx.js", "/assets/pagination-uxH0djeH.js", "/assets/index-Dd0htAhA.js", "/assets/plus-sjR9567-.js", "/assets/utils-ONoQxm8A.js", "/assets/createLucideIcon-DYtkCQUn.js", "/assets/x-BAMesz7e.js", "/assets/index-CCc9Stkd.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/admin.opportunities": { id: "routes/admin.opportunities", parentId: "routes/admin", path: "opportunities", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/admin.opportunities-ByoP0kny.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/button-vq5mvpSL.js", "/assets/label-DrQ3MxNx.js", "/assets/pagination-uxH0djeH.js", "/assets/index-Dd0htAhA.js", "/assets/plus-sjR9567-.js", "/assets/utils-ONoQxm8A.js", "/assets/createLucideIcon-DYtkCQUn.js", "/assets/x-BAMesz7e.js", "/assets/index-CCc9Stkd.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/admin.service-types": { id: "routes/admin.service-types", parentId: "routes/admin", path: "service-types", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/admin.service-types-CQkt4Dvj.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/button-vq5mvpSL.js", "/assets/label-DrQ3MxNx.js", "/assets/pagination-uxH0djeH.js", "/assets/index-Dd0htAhA.js", "/assets/plus-sjR9567-.js", "/assets/utils-ONoQxm8A.js", "/assets/createLucideIcon-DYtkCQUn.js", "/assets/x-BAMesz7e.js", "/assets/index-CCc9Stkd.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/admin.institutions": { id: "routes/admin.institutions", parentId: "routes/admin", path: "institutions", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/admin.institutions-BTIFwEWT.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/button-vq5mvpSL.js", "/assets/label-DrQ3MxNx.js", "/assets/pagination-uxH0djeH.js", "/assets/index-Dd0htAhA.js", "/assets/plus-sjR9567-.js", "/assets/utils-ONoQxm8A.js", "/assets/createLucideIcon-DYtkCQUn.js", "/assets/x-BAMesz7e.js", "/assets/index-CCc9Stkd.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/admin.users.$id": { id: "routes/admin.users.$id", parentId: "routes/admin.users", path: ":id", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/admin.users._id-l0sNRNKZ.js", imports: [], css: [] }, "routes/admin.services": { id: "routes/admin.services", parentId: "routes/admin", path: "services", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/admin.services-Vei-9wsE.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/button-vq5mvpSL.js", "/assets/label-DrQ3MxNx.js", "/assets/pagination-uxH0djeH.js", "/assets/index-Dd0htAhA.js", "/assets/plus-sjR9567-.js", "/assets/switch-D8DqNDBc.js", "/assets/utils-ONoQxm8A.js", "/assets/createLucideIcon-DYtkCQUn.js", "/assets/x-BAMesz7e.js", "/assets/index-CCc9Stkd.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/user-dashboard": { id: "routes/user-dashboard", parentId: "root", path: "user-dashboard", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/user-dashboard-lxa-uE3E.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js"], css: [] }, "routes/admin.sectors": { id: "routes/admin.sectors", parentId: "routes/admin", path: "sectors", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/admin.sectors-CusBq_nQ.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/button-vq5mvpSL.js", "/assets/label-DrQ3MxNx.js", "/assets/pagination-uxH0djeH.js", "/assets/index-Dd0htAhA.js", "/assets/plus-sjR9567-.js", "/assets/utils-ONoQxm8A.js", "/assets/createLucideIcon-DYtkCQUn.js", "/assets/x-BAMesz7e.js", "/assets/index-CCc9Stkd.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/auth.register": { id: "routes/auth.register", parentId: "root", path: "auth/register", index: void 0, caseSensitive: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/auth.register-_rVHe7ER.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/store-DCUB6VLK.js", "/assets/components-BVzGLikV.js", "/assets/index-Dd0htAhA.js", "/assets/index-BIRfPpac.js"], css: ["/assets/global-Ck0ywxwr.css"] }, "routes/opportunities": { id: "routes/opportunities", parentId: "root", path: "opportunities", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/opportunities-Cq7exOE9.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/createLucideIcon-DYtkCQUn.js", "/assets/button-whatsapp-I4_cGjAj.js", "/assets/pagination-uxH0djeH.js", "/assets/components-BVzGLikV.js", "/assets/index-Dd0htAhA.js", "/assets/index-CCc9Stkd.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/admin.index": { id: "routes/admin.index", parentId: "routes/admin", path: "index", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/admin.index-x_KrtUDL.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/card-Dvkl5-EY.js", "/assets/users-MlFErIGE.js", "/assets/index-BIRfPpac.js", "/assets/utils-ONoQxm8A.js", "/assets/createLucideIcon-DYtkCQUn.js"], css: [] }, "routes/admin.users": { id: "routes/admin.users", parentId: "routes/admin", path: "users", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/admin.users-DNkFDFXr.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/button-vq5mvpSL.js", "/assets/label-DrQ3MxNx.js", "/assets/pagination-uxH0djeH.js", "/assets/index-Dd0htAhA.js", "/assets/components-BVzGLikV.js", "/assets/switch-D8DqNDBc.js", "/assets/utils-ONoQxm8A.js", "/assets/createLucideIcon-DYtkCQUn.js", "/assets/x-BAMesz7e.js", "/assets/index-CCc9Stkd.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/auth._index": { id: "routes/auth._index", parentId: "root", path: "auth", index: !0, caseSensitive: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/auth._index-l0sNRNKZ.js", imports: [], css: [] }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/auth.login-DdyjVrGp.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/components-BVzGLikV.js", "/assets/index-Dd0htAhA.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/contact-us": { id: "routes/contact-us", parentId: "root", path: "contact-us", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/contact-us-Dtw3JQ-Z.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/ContactForm-DkE9GrpQ.js", "/assets/button-whatsapp-I4_cGjAj.js", "/assets/index-CCc9Stkd.js", "/assets/components-BVzGLikV.js", "/assets/index-Dd0htAhA.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/profile": { id: "routes/profile", parentId: "root", path: "profile", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/profile-D6Ct-I-k.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/card-Dvkl5-EY.js", "/assets/button-vq5mvpSL.js", "/assets/components-BVzGLikV.js", "/assets/house-CSaD2rl8.js", "/assets/createLucideIcon-DYtkCQUn.js", "/assets/utils-ONoQxm8A.js", "/assets/index-Dd0htAhA.js", "/assets/index-BIRfPpac.js"], css: [] }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/logout-l0sNRNKZ.js", imports: [], css: [] }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/_index-Cu3ackNU.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/ContactForm-DkE9GrpQ.js", "/assets/index-CCc9Stkd.js", "/assets/index-BIRfPpac.js"], css: ["/assets/_index-D4P7Gp5Y.css"] }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/__auth-DxW3j6xa.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/auth-layout-ChOUDUC_.js", "/assets/index-BIRfPpac.js", "/assets/store-DCUB6VLK.js", "/assets/index-Dd0htAhA.js", "/assets/components-BVzGLikV.js", "/assets/x-BAMesz7e.js", "/assets/createLucideIcon-DYtkCQUn.js"], css: ["/assets/auth-layout-C2Xcg7EW.css"] }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/admin-l0sNRNKZ.js", imports: [], css: [] }, "routes/404": { id: "routes/404", parentId: "root", path: "404", index: void 0, caseSensitive: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1, module: "/assets/404-DTH1LP_q.js", imports: ["/assets/jsx-runtime-BR5v9Sea.js", "/assets/components-BVzGLikV.js", "/assets/index-Dd0htAhA.js", "/assets/index-BIRfPpac.js"], css: [] } }, url: "/assets/manifest-9b9784f8.js", version: "9b9784f8" }, mode = "production", assetsBuildDirectory = "build\\client", basename = "/", future = { v3_fetcherPersist: !0, v3_relativeSplatPath: !0, v3_throwAbortReason: !0, v3_routeConfig: !1, v3_singleFetch: !0, v3_lazyRouteDiscovery: !0, unstable_optimizeDeps: !1 }, isSpaMode = !1, publicPath = "/", entry = { module: entryServer }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/admin.opportunity-types": {
    id: "routes/admin.opportunity-types",
    parentId: "routes/admin",
    path: "opportunity-types",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/admin.opportunities": {
    id: "routes/admin.opportunities",
    parentId: "routes/admin",
    path: "opportunities",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/admin.service-types": {
    id: "routes/admin.service-types",
    parentId: "routes/admin",
    path: "service-types",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/admin.institutions": {
    id: "routes/admin.institutions",
    parentId: "routes/admin",
    path: "institutions",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/admin.users.$id": {
    id: "routes/admin.users.$id",
    parentId: "routes/admin.users",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/admin.services": {
    id: "routes/admin.services",
    parentId: "routes/admin",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/user-dashboard": {
    id: "routes/user-dashboard",
    parentId: "root",
    path: "user-dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/admin.sectors": {
    id: "routes/admin.sectors",
    parentId: "routes/admin",
    path: "sectors",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/auth.register": {
    id: "routes/auth.register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/opportunities": {
    id: "routes/opportunities",
    parentId: "root",
    path: "opportunities",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/admin.index": {
    id: "routes/admin.index",
    parentId: "routes/admin",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/admin.users": {
    id: "routes/admin.users",
    parentId: "routes/admin",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/auth._index": {
    id: "routes/auth._index",
    parentId: "root",
    path: "auth",
    index: !0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/contact-us": {
    id: "routes/contact-us",
    parentId: "root",
    path: "contact-us",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route18
  },
  "routes/__auth": {
    id: "routes/__auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route19
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "404",
    index: void 0,
    caseSensitive: void 0,
    module: route21
  }
};

// netlify/functions/server.ts
var handler = createRequestHandler({ build: server_exports });
export {
  handler
};
