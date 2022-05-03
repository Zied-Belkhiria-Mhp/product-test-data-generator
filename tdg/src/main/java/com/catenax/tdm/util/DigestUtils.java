package com.catenax.tdm.util;

import java.lang.StringBuilder;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class DigestUtils {

    public static String sha256(String input) {

        StringBuilder sb = new StringBuilder();
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] e = md.digest(input.getBytes(StandardCharsets.UTF_8));
            for ( int i = 0; i < e.length; i++){
                String c = Integer.toHexString(0xff & e[i]);
                if (c.length() == 1){
                    sb.append("0");
                }
                sb.append(c);
            }
        } catch (Exception ex){
            System.err.println(ex.getMessage());
        }
        return sb.toString();
    }

    public static String uuidFromHash (String input) {

        String hash = sha256(input);
        StringBuilder result = new StringBuilder("urn:uuid:");

        result.append(hash.substring( 0, 7));
        result.append("-");

        result.append(hash.substring( 8, 11));
        result.append("-");

        result.append(hash.substring( 12, 15));
        result.append("-");

        result.append(hash.substring( 16, 19));
        result.append("-");

        result.append(hash.substring( 20, 31));

        return result.toString();
    }


}
