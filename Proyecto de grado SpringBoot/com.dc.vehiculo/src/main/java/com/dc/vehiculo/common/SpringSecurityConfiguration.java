package com.dc.vehiculo.common;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfiguration {

    @Bean
    public DefaultSecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.POST, "/vehiculo/**").hasRole("ADMIN") //todas que coincidan con metodos post dentro del requestmapping de billing estaran controladas por un metodo de autentificacion
                        .requestMatchers(HttpMethod.DELETE, "/vehiculo/**").hasRole("ADMIN") //todas que coincidan con metodos post dentro del requestmapping de billing estaran controladas por un metodo de autentificacion
                        .requestMatchers(HttpMethod.PUT, "/vehiculo/**").hasRole("ADMIN") //todas que coincidan con metodos post dentro del requestmapping de billing estaran controladas por un metodo de autentificacion
                        .requestMatchers(HttpMethod.GET, "/vehiculo/**").permitAll() //todos los que sean get y sean admin dentro de requestmapping de billing podran ejecutarse
                        .anyRequest().permitAll()
                )
                .httpBasic(Customizer.withDefaults())
                .formLogin(Customizer.withDefaults());
        return http.build();
    }
}
