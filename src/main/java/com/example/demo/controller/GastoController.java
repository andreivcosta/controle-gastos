package com.example.demo.controller;

import com.example.demo.model.Gasto;
import com.example.demo.repository.GastoRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/gastos")
public class GastoController {

    private final GastoRepository repository;

    public GastoController(GastoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Gasto> listar() {
        return repository.findAll();
    }

    @PostMapping
    public Gasto criar(@RequestBody Gasto gasto) {
        return repository.save(gasto);
    }
}