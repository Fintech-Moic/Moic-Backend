package com.finp.moic.util.exception;

public class AlreadyExistException extends BusinessException{

    public AlreadyExistException(ExceptionEnum e) {
        super(e);
    }
}
