package com.example.community_app.repository;

//repository is a mechanism for encapsulating storage, retrieval, and search behavior which emulates a collection of objects; this is an interface

import com.example.community_app.models.Events;
import org.springframework.data.repository.CrudRepository; //https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/repository/CrudRepository.html
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepo extends CrudRepository<Events, String> {
}
