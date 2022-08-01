package com.springboot.backend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.dto.ProductDto;
import com.springboot.backend.dto.VendorDto;
import com.springboot.backend.model.Product;
import com.springboot.backend.model.Vendor;
import com.springboot.backend.repository.ProductRepository;
import com.springboot.backend.repository.VendorRepository;

@RestController
public class VendorController {

	@Autowired
	private VendorRepository vendorRepository;
	
	@Autowired
	private ProductRepository productRepository; 
	
	@PostMapping("/vendor")
	public void postVendor(@RequestBody Vendor vendor) {
		vendorRepository.save(vendor);
	}
	
	@GetMapping("/vendor") 
	public List<VendorDto> getAllVendors(
			@RequestParam(name = "page",required = false, defaultValue = "0") Integer page, 
			@RequestParam(name = "size",required = false, defaultValue = "100000") Integer size ) {
		
		Pageable pageable=PageRequest.of(page, size);
		List<Vendor>  list = vendorRepository.findAll(pageable).getContent(); //20
		List<VendorDto> listVDto = new ArrayList<>();
		
		List<Product> listProducts = productRepository.findAll();
		
		list.stream().forEach(v->{ //20
			List<ProductDto> listPDto = new ArrayList<>();  //1
			VendorDto vDto = new VendorDto(); 
			vDto.setId(v.getId());
			vDto.setName(v.getName());
			List<Product> filteredList = listProducts.stream()
						.filter(p-> p.getVendor().getId().equals(v.getId()))
						.collect(Collectors.toList());
			vDto.setNumProducts(filteredList.size());
			//System.out.println(filteredList);
			filteredList.stream().forEach(p->{
				ProductDto dto = new ProductDto(); 
				dto.setId(p.getId());
				dto.setName(p.getName());
				dto.setPrice(p.getPrice());
				dto.setCid(p.getCategory().getId());
				dto.setCname(p.getCategory().getName());
				dto.setCpref(p.getCategory().getPreference());
				dto.setVid(p.getVendor().getId());
				dto.setVcity(p.getVendor().getCity());
				dto.setVname(p.getVendor().getName());
				listPDto.add(dto);
			});
			vDto.setProducts(listPDto);
			listVDto.add(vDto);
		});
		return listVDto; 
	}
	
	@GetMapping("/vendor/{id}") //<-- path variable : /vendor/7
	public Vendor getVendorById(@PathVariable("id") Long id) { //id=7
		Optional<Vendor> optional = vendorRepository.findById(id);
		if(optional.isPresent())
			return optional.get();
		else
			throw new RuntimeException("ID is invalid");
	}
	
	public void deleteVendor(){
		
	}
}
