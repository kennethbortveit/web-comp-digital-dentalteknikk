package no.bortveits.ddt;

import org.springframework.boot.web.server.MimeMappings;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.stereotype.Component;

@Component
public class CustomServletConfiguration implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>{
	@Override
	public void customize(ConfigurableServletWebServerFactory factory) {
		var mappings = new MimeMappings(MimeMappings.DEFAULT);
		mappings.add("mjs", "application/javascript");
		factory.setMimeMappings(mappings);
	}
}
