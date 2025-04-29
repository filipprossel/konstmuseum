package com.example.khbe.Review;

import com.example.khbe.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer>{
    List<Review> findAllByUser(User user);
}
