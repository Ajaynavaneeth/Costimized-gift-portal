package com.giftcart.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Userdetailsdto {

   
    private Long id;
    private String name;
    private String phoneNumber;
    private String email;
}
