package com.project.emsbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Orderdetails")
public class Orderdetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "orderno", nullable = false)
    private Integer ordernumber;

    @Column(name = "productname", nullable = false)
    private String productname;

    @Column(name = "quantity", nullable = false, unique = true)
    private Integer quantity;
    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "transactionmode", nullable = false)
    private String transactionmode;
   
    @Column(name = "total", nullable = false)
    private Integer total;
}
