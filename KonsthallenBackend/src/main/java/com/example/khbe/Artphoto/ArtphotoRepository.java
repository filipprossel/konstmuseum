package com.example.khbe.Artphoto;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ArtphotoRepository extends JpaRepository<Artphoto, Integer> {
    List<Artphoto> findByExhibition_ExhibitionId(int exhibition_id);
}
