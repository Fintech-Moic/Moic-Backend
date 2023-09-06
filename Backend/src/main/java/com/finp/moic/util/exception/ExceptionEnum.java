package com.finp.moic.util.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
@AllArgsConstructor
public enum ExceptionEnum {

    // 1. USER
    USER_REGIST_DUPLICATE(HttpStatus.BAD_REQUEST,"U0001","이미 존재하는 회원입니다.");



    // 2. USER SECURITY
    // 3. SHOP
    // 4. CARD
    // 5. GIFT CARD


    private final HttpStatus status;
    private final String errorCode;
    private String errorMessage;
}
