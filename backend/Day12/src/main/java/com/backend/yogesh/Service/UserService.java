package com.backend.yogesh.Service;

import com.backend.yogesh.dto.request.UserRequest;
import com.backend.yogesh.dto.response.BasicResponse;
import com.backend.yogesh.dto.response.UserResponse;

public interface UserService {
     BasicResponse<UserResponse> getAllUser();
     BasicResponse<UserResponse> deleteuser(int id);
     UserResponse updateUser(int id,UserRequest request);
}