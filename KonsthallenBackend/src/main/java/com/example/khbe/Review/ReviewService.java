package com.example.khbe.Review;


import com.example.khbe.Artphoto.ArtphotoRepository;
import com.example.khbe.Entity.User;
import com.example.khbe.Entity.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ArtphotoRepository artphotoRepository;
    @Autowired
    private UserRepository userRepository;
    public HttpStatus setReviewAndScore(HashMap<String, String> reviewData){//Skapar en review med hjälp av datan från hashmapen.
        Review newReview = new Review();
        if(reviewData.get("user_id") == null || reviewData.get("art_id") == null){//Ifall värden som är nödvändiga inte skickas med, returneras en HTTPStatus.BAD_REQUEST.
            System.out.println(reviewData.get("user_id"));
            return HttpStatus.BAD_REQUEST;
        }
        try{
            newReview.setGrade(Integer.parseInt(reviewData.get("grade")));//Ifall den inte kan konvertera strängen till en siffra, betyder det att den antingen är tom eller inte en siffra...
            }//...vilket betyder att man inte har satt något betyg.
        catch (NumberFormatException NFE){//Betyget sätts till -1, då default-värdet annars är 0, vilket inte är betyget som användaren syftar på att ge.
            newReview.setGrade(-1);
        }
        newReview.setUser(userRepository.getReferenceById(Integer.parseInt(reviewData.get("user_id"))));
        newReview.setArtphoto(artphotoRepository.getReferenceById(Integer.parseInt(reviewData.get("art_id"))));
        newReview.setReview(reviewData.get("review"));
        reviewRepository.save(newReview);//Sparar reviewn.
        return HttpStatus.CREATED;
    }
    public List<ReviewDTO> getAllReviews(int userId){//Metod för att hämta alla reviews som en specifik användare har gjort.
        User user = userRepository.getReferenceById(userId); //Hämta användare via userID.
        List<Review> reviewList = reviewRepository.findAllByUser(user); //Hittar alla reviews för användaren
        List<ReviewDTO> reviewDTOList = new ArrayList<>();//Ett specifikt objekt/entitet för datan som ska skickas tillbaka
        for(Review review : reviewList){ //För varje review som användaren har skrivit ska data från review läggas till i en reviewDTO som sedan läggs till i listan med ReviewDTO
            ReviewDTO reviewDTO = new ReviewDTO();
            reviewDTO.setReview_id(review.getReview_id());
            reviewDTO.setArt_id(review.getArtphoto().getArt_id());
            reviewDTO.setGrade(review.getGrade());
            reviewDTO.setReview(review.getReview());
            reviewDTOList.add(reviewDTO);
        }

        return reviewDTOList;
    }
}
