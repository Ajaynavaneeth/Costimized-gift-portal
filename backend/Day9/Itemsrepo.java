package com.giftcart.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giftcart.Model.Items;


public interface Itemsrepo extends JpaRepository<Items, Long> {

}
