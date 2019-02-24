@Grab(group = 'org.codehaus.groovy.modules.http-builder', module = 'http-builder', version = '0.5.2')
@Grab(group='org.apache.httpcomponents', module='httpmime', version='4.3.1')


import org.apache.http.HttpEntity
import org.apache.http.HttpResponse
import org.apache.http.client.HttpClient
import org.apache.http.client.methods.HttpPost
import org.apache.http.impl.client.DefaultHttpClient
import org.apache.http.entity.mime.MultipartEntityBuilder
import org.apache.http.entity.ContentType

String rootUrl = "https://bioentity.link/dmc/"
//String rootUrl = "http://localhost:8080" // dev
String httpUrl = "${rootUrl}/publication/ingestFile"
String filePath = "/Users/nathandunn/repositories/dmc/scripts/15278.xml"
File file = new File(filePath)
assert file.exists()

HttpClient httpClient = new DefaultHttpClient()

HttpEntity entity = MultipartEntityBuilder
        .create()
        .addTextBody("fileName", "15278.xml")
        .addTextBody("xmlFile", file.text )
        .addTextBody("default", "worm")
        .build()

HttpPost httpPost = new HttpPost(httpUrl)
httpPost.setEntity(entity)
HttpResponse response = httpClient.execute(httpPost)
HttpEntity result = response.getEntity()

println "result ${result}"

