package com.example.demo.repository;

import com.example.demo.model.Gasto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GastoRepository extends JpaRepository<Gasto, Long> {

}