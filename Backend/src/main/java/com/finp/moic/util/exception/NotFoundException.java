package com.finp.moic.util.exception;

public class NotFoundException extends BusinessException{

    public NotFoundException(ExceptionEnum e) {
        super(e);
    }
}
