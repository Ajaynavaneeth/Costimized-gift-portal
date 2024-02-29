package com.giftcart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.giftcart.Model.Orderdetails;


public interface Orderdetailsrepo extends JpaRepository<Orderdetails, Long> {
}