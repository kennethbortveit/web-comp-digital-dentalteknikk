package no.bortveits.ddt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.TestConfiguration;

@TestConfiguration(proxyBeanMethods = false)
public class TestDdtApplication {

	public static void main(String[] args) {
		SpringApplication.from(DdtApplication::main).with(TestDdtApplication.class).run(args);
	}

}
