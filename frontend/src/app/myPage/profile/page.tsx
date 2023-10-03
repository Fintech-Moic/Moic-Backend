'use client';

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import ProfileContainer from '../organisms/ProfileContainer';
import ProfilePasswordModal from '../organisms/ProfilePasswordModal';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';
import {
  fetchProfile,
  updateProfile,
  checkPassword,
  updatePassword,
  WithdrawalApi,
} from '@/api/myPage';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [profileData, setProfileData] = useState<{
    name: string;
    email: string;
    gender: string;
    yearOfBirth: string;
  } | null>(null);
  const [selectedData, setSelectedData] = useState<{
    gender: string | null;
    yearOfBirth: string | null;
  }>({ gender: null, yearOfBirth: null });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const genderList = ['선택안함', '남성', '여성'];
  const yearsList = [
    '선택안함',
    ...Array.from({ length: 124 }, (_, i) => (2023 - i).toString()),
  ];
  const dropDownData = {
    genderList,
    yearsList,
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const checkPasswordConfirm = async (): Promise<boolean> => {
    const result = await Swal.fire({
      title: '비밀번호 입력',
      input: 'password',
      inputPlaceholder: '비밀번호를 입력해주세요',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return '비밀번호를 입력해주세요!';
        }
        return null;
      },
    });
    if (result.isConfirmed && result.value) {
      console.log(result);
      try {
        const response = await checkPassword(result.value);
        if (response.message !== undefined) return true;
        return false;
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '비밀번호가 잘못되었습니다.',
          text: '다시 시도해주세요.',
        });
        return false;
      }
    }
    return false;
  };
  const passwordCheckToModal = async () => {
    const isPasswordValid = await checkPasswordConfirm();
    if (isPasswordValid) {
      openModal();
    }
  };
  const modifyPassword = handleSubmit(async (data) => {
    const response = await updatePassword(data);
    if (response.message !== null) closeModal();
  });
  const Withdrawal = async () => {
    const isPasswordValid = await checkPasswordConfirm();
    if (isPasswordValid) {
      WithdrawalApi();
    }
  };

  const modifyProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateProfile(selectedData);
  };
  useEffect(() => {
    const datafetch = async () => {
      const fetchData = await fetchProfile();
      setProfileData(fetchData.data);
    };
    datafetch();
  }, []);

  return (
    <>
      <Header title="계정 설정" isPrevButton isFilterButton={false} />
      <div
        className={`relative flex-1 overflow-y-auto flex flex-col items-center w-full ${
          isModalOpen ? 'bg-black bg-opacity-50' : ''
        }`}
      >
        {profileData && (
          <ProfileContainer
            name={profileData.name}
            email={profileData.email}
            dropDownData={dropDownData}
            setSelectedData={setSelectedData}
            onSubmit={modifyProfile}
            fetchSelectedGender={profileData.gender}
            fetchSelectedYear={profileData.yearOfBirth}
            passwordCheckToModal={passwordCheckToModal}
            Withdrawal={Withdrawal}
          />
        )}
      </div>
      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ProfilePasswordModal
            closeModal={closeModal}
            register={register}
            errors={errors}
            onSubmit={modifyPassword}
          />
        </div>
      )}
      <div
        className={` flex justify-center ${
          isModalOpen ? 'bg-black bg-opacity-50' : ''
        }`}
      >
        <Navbar />
      </div>
    </>
  );
}
