package com.giftcart.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.giftcart.Model.Review;
public interface Reviewrepo extends JpaRepository<Review, Long> {
}