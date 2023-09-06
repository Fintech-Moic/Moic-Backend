package com.finp.moic.userSecurity.model.entity;

import com.finp.moic.util.entity.Base;
import jakarta.persistence.*;
import lombok.*;

@Entity(name="userSecurity")
@Table(indexes = {
        @Index(name = "userSecurity_userId",columnList = "userId"),
})
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserSecurity extends Base {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userSecuritySeq;

    @Column(length = 20, nullable = false, unique = true)
    private String userId;

    @Column(length = 500, nullable = false)
    private String salt;
}
