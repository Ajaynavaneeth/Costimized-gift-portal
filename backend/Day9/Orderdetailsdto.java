package com.giftcart.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Orderdetailsdto {


    private Long id;
    private Integer ordernumber;
    private String productname;
    private Integer quantity;
    private String address;
    private String transactionmode;
    private Integer total;
}
