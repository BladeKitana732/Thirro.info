package com.example.community_app.repository;

import com.example.community_app.models.DevSpeaker;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpeakerRepo extends CrudRepository<DevSpeaker, String> {
}
