package com.giftcart.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Itemsdto {

    private Long id;
    private String Pname;
    private String category;
    private Integer price;

   
}