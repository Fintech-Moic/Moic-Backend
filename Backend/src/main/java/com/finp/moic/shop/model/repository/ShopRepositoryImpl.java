package com.finp.moic.shop.model.repository;

import com.finp.moic.card.model.entity.QCardBenefit;
import com.finp.moic.shop.model.dto.response.QShopDetailResponseDTO;
import com.finp.moic.shop.model.dto.response.ShopDetailResponseDTO;
import com.finp.moic.shop.model.entity.QShop;
import com.finp.moic.shop.model.entity.Shop;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ShopRepositoryImpl implements ShopRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    @Autowired
    public ShopRepositoryImpl(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    /**
     * TO DO :: 필요한 칼럼만 받고, DTO로 리턴하도록 수정
     **/

    public Boolean exist(String shopName){
        QShop shop=QShop.shop;

        Integer fetchOne = queryFactory
                .selectOne()
                .from(shop)
                .where(shop.name.eq(shopName))
                .fetchFirst();

        return fetchOne != null;
    }

    @Override
    public Optional<ShopDetailResponseDTO> findByNameAndLocation(String shopName, String shopLocation) {
        QShop shop=QShop.shop;

        return Optional.ofNullable(queryFactory
                .select(
                        new QShopDetailResponseDTO(
                                shop.category,
                                shop.name.as("shopName"),
                                shop.location.as("shopLocation"),
                                shop.address
                        )
                )
                .from(shop)
                .where(
                        shop.name.eq(shopName)
                                .and(shop.location.eq(shopLocation))
                )
                .fetchOne());
    }

    /**
     * CONFIRM :: 한 키워드에 대해 다양한 가맹점이 있다면?
     **/
    @Override
    public String findShopNameByKeyword(String keyword) {
        QShop shop=QShop.shop;

        return queryFactory
                .select(shop.name)
                .from(shop)
                .where(shop.name.contains(keyword))
                .fetchFirst();
    }

    @Override
    public List<String> findAllShopNameByCategory(String category) {
        QShop shop=QShop.shop;

        return queryFactory
                .selectDistinct(shop.name)
                .from(shop)
                .where(
                        shop.mainCategory.contains(category)
                        .or(shop.category.contains(category))
                )
                .fetch();
    }
}