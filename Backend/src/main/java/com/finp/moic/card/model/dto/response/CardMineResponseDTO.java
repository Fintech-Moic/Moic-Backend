package com.finp.moic.card.model.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@ToString
public class CardMineResponseDTO implements Serializable {

    private String company;
    private String type;
    private String name;
    private String cardImage;

    public CardMineResponseDTO() {
    }

    @Builder
    public CardMineResponseDTO(String company, String type, String name,
                               String cardImage) {
        this.company = company;
        this.type = type;
        this.name = name;
        this.cardImage = cardImage;
    }
}