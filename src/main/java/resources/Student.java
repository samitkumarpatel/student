package resources;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/students")
public class Student {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Student> getAll() {
		return new ArrayList<Student>();
	}
}
