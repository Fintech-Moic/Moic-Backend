package com.finp.moic.util.exception;

import lombok.Builder;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@Builder
public class BusinessExceptionEntity {

    private HttpStatus status;
    private String errorCode;
    private String errorMessage;

}
