package com.example.khbe.Exhibition;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExhibitionRepository extends JpaRepository<Exhibition, Integer> {
    Exhibition findByExhibitionId(int exhibition_id);
}