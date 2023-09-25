package com.finp.moic.util.security.oauth.handler;

import com.finp.moic.util.cookie.CookieService;
import com.finp.moic.util.security.oauth.dto.CustomOAuth2User;
import com.finp.moic.util.security.service.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URLDecoder;

import static java.nio.charset.StandardCharsets.UTF_8;

@Slf4j
@Component
@RequiredArgsConstructor
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtService jwtService;
    private final String REDIRECT_URI_PARAM_COOKIE_NAME = "redirect_uri";

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        System.out.println("OAuth2AuthenticationSuccessHandler.onAuthenticationSuccess");
        CustomOAuth2User oAuth2User = (CustomOAuth2User)authentication.getPrincipal();

        System.out.println("ID : " + oAuth2User.getUserInfo().getId());

        String accessToken = jwtService.createAccessToken(oAuth2User.getUserInfo().getId());
        String refreshToken = jwtService.createRefreshToken();

        setRefreshTokenInCookie(response, refreshToken);

        System.out.println("1");

        String redirect_uri = CookieService.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
                .map(cookie -> cookie.getValue())
                .map(cookie -> URLDecoder.decode(cookie, UTF_8))
                .orElse(getDefaultTargetUrl());

        System.out.println("2");

        String targetUrl = UriComponentsBuilder.fromUriString(redirect_uri)
                .queryParam("accessToken", accessToken)
                        .build().toUriString();

        System.out.println("3");

        getRedirectStrategy().sendRedirect(request, response, targetUrl);

        System.out.println("4");
    }

    private void setRefreshTokenInCookie(HttpServletResponse response, String refreshToken) {
        CookieService.addCookie(response, "refreshToken", refreshToken, jwtService.getRefreshTokenExpire());
    }
}