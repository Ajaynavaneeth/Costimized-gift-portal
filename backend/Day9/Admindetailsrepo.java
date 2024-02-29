package com.giftcart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giftcart.Model.Admindetails;


public interface Admindetailsrepo extends JpaRepository<Admindetails, Long> {
}