package com.example.khbe.userExhibitionsVisited;

import com.example.khbe.Exhibition.Exhibition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface UserExhibitionsVisitedRepository extends JpaRepository<UserExhibitionsVisited, Integer> {
    @Query(
            value = ("SELECT exhibition.exhibition_name, exhibition.exhibition_date, exhibition_desc, user_exhibitions_visited.visited_date FROM ((exhibition INNER JOIN user_exhibitions_visited ON user_exhibitions_visited.exhibition_id = exhibition.exhibition_id) INNER JOIN users on users.user_id = user_exhibitions_visited.user_id)"),
            nativeQuery = true)
        Collection<String> findUserExhibitionsVisitedBy();
}

