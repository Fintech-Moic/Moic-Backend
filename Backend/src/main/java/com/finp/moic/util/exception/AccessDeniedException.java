package com.finp.moic.util.exception;

public class AccessDeniedException extends BusinessException{

    public AccessDeniedException(ExceptionEnum e) {
        super(e);
    }
}
