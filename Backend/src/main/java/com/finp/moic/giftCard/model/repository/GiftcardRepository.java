package com.finp.moic.giftCard.model.repository;

import com.finp.moic.giftCard.model.entity.Giftcard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GiftcardRepository extends JpaRepository<Giftcard,Long>, GiftcardRepositoryCustom {

}