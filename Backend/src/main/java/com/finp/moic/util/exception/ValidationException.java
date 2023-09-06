package com.finp.moic.util.exception;

public class ValidationException extends BusinessException{

    public ValidationException(ExceptionEnum e) {
        super(e);
    }
}
