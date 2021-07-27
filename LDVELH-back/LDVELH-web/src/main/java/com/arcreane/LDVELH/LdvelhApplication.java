package com.arcreane.LDVELH;

import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class LdvelhApplication {

	public static void main(String[] args) {
		SpringApplication.run(LdvelhApplication.class, args);
	}

	@Bean
	public Hibernate5Module getHibernate5Module() {
		return new Hibernate5Module();
	}
}
