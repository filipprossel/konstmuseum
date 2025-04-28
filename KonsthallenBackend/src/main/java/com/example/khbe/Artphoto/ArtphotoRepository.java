package com.example.khbe.Artphoto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ArtphotoRepository extends JpaRepository<Artphoto, Integer> {
    List<Artphoto> findByExhibition_ExhibitionId(int exhibition_id);

    @Query("SELECT a FROM Artphoto a WHERE a.art_id = :art_id")
    Artphoto findByArt_id(int art_id);
}
