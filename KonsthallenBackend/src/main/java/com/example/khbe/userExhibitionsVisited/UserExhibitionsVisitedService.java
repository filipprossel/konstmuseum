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
    public List<UserExhibitionsVisitedDTO> getAllExhibitionsVisited(int user_id){
        List<UserExhibitionsVisited> joined = userExhibitionsVisitedRepository.findByUser_Id(user_id);
        List<UserExhibitionsVisitedDTO> exhibitionList = new ArrayList<>();
        for(UserExhibitionsVisited uev : joined){
            UserExhibitionsVisitedDTO ex = new UserExhibitionsVisitedDTO();
            Exhibition exhibition = uev.exhibition;
            ex.setExhibition_name(exhibition.getExhibition_name());
            ex.setExhibition_desc(exhibition.getExhibition_desc());
            ex.setExhibition_date(exhibition.getExhibition_date());
            ex.setVisited_date(uev.getVisited_date());
            exhibitionList.add(ex);
        }
        return exhibitionList;
    }

}
