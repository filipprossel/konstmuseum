package com.example.khbe.userExhibitionsVisited;

import com.example.khbe.Entity.UserRepository;
import com.example.khbe.Exhibition.Exhibition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserExhibitionsVisitedService {
    @Autowired
    private UserExhibitionsVisitedRepository userExhibitionsVisitedRepository;
    public List<UserExhibitionsVisitedDTO> getAllExhibitionsVisited(int user_id){//Metod för att skapa och populera en lista med vila uställningar användaren har varit på.
        List<UserExhibitionsVisited> joined = userExhibitionsVisitedRepository.findByUser_Id(user_id);
        List<UserExhibitionsVisitedDTO> exhibitionList = new ArrayList<>();
        for(UserExhibitionsVisited uev : joined){ //För varje utställning användaren har varit på, tas data från den för och sätts för objektet uev.
            UserExhibitionsVisitedDTO ex = new UserExhibitionsVisitedDTO();
            Exhibition exhibition = uev.exhibition;
            ex.setExhibition_name(exhibition.getExhibition_name());
            ex.setExhibition_desc(exhibition.getExhibition_desc());
            ex.setExhibition_start_date(exhibition.getExhibition_date_start());
            ex.setVisited_date(uev.getVisited_date());
            ex.setExhibition_id(exhibition.getExhibition_id());
            exhibitionList.add(ex);
        }
        return exhibitionList;
    }

}
