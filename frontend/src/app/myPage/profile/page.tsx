'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ProfileContainer from '../organisms/ProfileContainer';
import ProfilePasswordCheckModal from '../organisms/ProfilePasswordCheckModal';
import ProfilePasswordUpdateModal from '../organisms/ProfilePasswordUpdateModal';
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
  const [toUpdate, setToUpdate] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ischeckModal, setIsCheckModal] = useState(true);
  const [passwordData, setPasswordData] = useState<{} | null>(null);
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
  const toPasswordUpdate = () => {
    setToUpdate(true);
  };
  const toWithdrawal = () => {
    setToUpdate(false);
  };
  const openPasswordCheckModal = () => {
    setIsCheckModal(true);
  };
  const openPasswordUpdateModal = () => {
    setIsCheckModal(false);
  };

  const openCheckModalToUpdate = () => {
    openPasswordCheckModal();
    toPasswordUpdate();
    openModal();
  };
  const openCheckModalToWithdrawal = () => {
    openPasswordCheckModal();
    toWithdrawal();
    openModal();
  };

  const modifyPassword = handleSubmit(async (data) => {
    setPasswordData({
      newPassword: data.newPassword,
      newPasswordCheck: data.newPasswordCheck,
    });
    const result = await updatePassword(data);
    if (result) closeModal();
  });
  useEffect(() => {
    const passwordCheck = async () => {
      if (passwordData !== null) {
        const result = await updatePassword(passwordData);
        if (result) closeModal();
      }
    };
    if (passwordData !== null) passwordCheck();
  }, [passwordData]);

  const Withdrawal = async () => {
    const result = await WithdrawalApi();
    if (result) closeModal();
  };
  const confirmPassword = handleSubmit(async (data) => {
    const result = await checkPassword(data);
    if (result) {
      if (toUpdate) {
        openPasswordUpdateModal();
      } else {
        Withdrawal();
      }
    }
  });

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
            passwordCheckToModal={openCheckModalToUpdate}
            Withdrawal={openCheckModalToWithdrawal}
          />
        )}
      </div>
      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center">
          {ischeckModal ? (
            <ProfilePasswordCheckModal
              closeModal={closeModal}
              register={register}
              errors={errors}
              onSubmit={confirmPassword}
            />
          ) : (
            <ProfilePasswordUpdateModal
              closeModal={closeModal}
              register={register}
              errors={errors}
              onSubmit={modifyPassword}
            />
          )}
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
