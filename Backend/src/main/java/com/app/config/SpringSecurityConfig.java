//package com.app.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class SpringSecurityConfig extends WebSecurityConfigurerAdapter{
//
//	@Autowired
//	private UserDetailsService userDetailsService;
//	
//	
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		// override this method to enable DAO based authentication using JPA --based upon UserDetailsService
//		auth.userDetailsService(userDetailsService);  //passwordEncoder(new BCryptPasswordEncoder());
//	}
////	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		//override this method , to customize , authorization rules : based upon roles.
//		http.authorizeRequests().
//		anyRequest().authenticated()
//		.and() 
//		.formLogin()
//		.and()
//		.httpBasic();	
//	}
//	
////	@Override
////	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
////	    clients
////	            .inMemory()
////	            .withClient("clientapp")
////	            .authorizedGrantTypes("password","refresh_token")
////	            .authorities("USER")
////	            .scopes("read", "write")
////	            .resourceIds(RESOURCE_ID)
////	            .secret(passwordEncoder.encode("SECRET"));
////	}
//		
//	@Bean
//	public PasswordEncoder passwordEncoder()
//	{
//		return new BCryptPasswordEncoder();
//	}
//	
//}
