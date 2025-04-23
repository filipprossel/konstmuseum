package com.example.khbe.userExhibitionsVisited;

import com.example.khbe.Exhibition.Exhibition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface UserExhibitionsVisitedRepository extends JpaRepository<UserExhibitionsVisited, UserExhibitionsVisitedKey> {
   List<UserExhibitionsVisited> findByUser_Id(int user_id);
}

