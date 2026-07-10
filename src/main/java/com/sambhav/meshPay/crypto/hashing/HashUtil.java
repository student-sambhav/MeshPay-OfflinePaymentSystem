package com.sambhav.meshPay.crypto.hashing;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class HashUtil {

    private HashUtil(){}

    public static String sha256(String text){

        try{

            MessageDigest digest =
                    MessageDigest.getInstance("SHA-256");

            byte[] hash =
                    digest.digest(
                            text.getBytes(StandardCharsets.UTF_8));

            StringBuilder builder =
                    new StringBuilder();

            for(byte b : hash){

                builder.append(
                        String.format("%02x",b));

            }

            return builder.toString();

        }
        catch (Exception e){

            throw new RuntimeException(e);

        }

    }

}