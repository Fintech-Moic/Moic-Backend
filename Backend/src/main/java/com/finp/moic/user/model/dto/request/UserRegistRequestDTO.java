package com.finp.moic.user.model.dto.request;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserRegistRequestDTO {

    @NotNull
    @Pattern(regexp = "^[a-z0-9]{6,12}$")
    private String id;

    @NotNull
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,16}$")
    private String password;

    @NotNull
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,16}$")
    private String passwordCheck;

    @NotNull
    @NotBlank
    @NotEmpty
    private String name;

    @NotNull
    @Email
    private String email;

    private String gender;

    private int yearOfBirth;
}
