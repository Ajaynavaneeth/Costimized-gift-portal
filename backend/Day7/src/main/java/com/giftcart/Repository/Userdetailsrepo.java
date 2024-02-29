package com.giftcart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.giftcart.Model.Userdetails;


public interface Userdetailsrepo extends JpaRepository<Userdetails, Long> {
}