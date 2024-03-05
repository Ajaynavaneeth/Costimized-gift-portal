package com.backend.yogesh.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.backend.yogesh.repository.UserRepository;

@Service
public class AuthService implements UserDetailsService{

    @Autowired
    UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<com.backend.yogesh.model.User> user=userRepository.findByEmail(username);
        return user.orElseThrow(()-> new UsernameNotFoundException("Invalid Username:"));
    }

}
