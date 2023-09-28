package com.finp.moic.userBookmark.model.repository;

import com.finp.moic.userBookmark.model.entity.UserBookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserBookmarkRepository extends JpaRepository<UserBookmark,Long>,UserBookmarkRepositoryCustom {
}
