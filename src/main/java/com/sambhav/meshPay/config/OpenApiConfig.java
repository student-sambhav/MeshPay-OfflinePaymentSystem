package com.sambhav.meshPay.config;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@SecurityScheme(
        name = "Bearer Authentication",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer",
        bearerFormat = "JWT"
)
public class OpenApiConfig {

    @Bean
    public OpenAPI meshPayOpenAPI() {

        return new OpenAPI()
                .info(new Info()
                        .title("MeshPay API")
                        .version("1.0")
                        .description("Offline Mesh Payment System")
                        .contact(new Contact()
                                .name("Sambhav Gupta")));
    }
}