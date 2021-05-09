-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2021 at 05:32 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.3.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_product`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `price` float NOT NULL,
  `description` text NOT NULL,
  `view` int(11) NOT NULL,
  `is_delete` tinyint(1) NOT NULL DEFAULT 0,
  `insertdate` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`id`, `name`, `price`, `description`, `view`, `is_delete`, `insertdate`, `updatedate`) VALUES
(1, 'product_1', 10, '', 23, 0, '2021-05-09 14:53:01', '2021-05-09 15:29:15'),
(2, 'product_2', 20, '', 2, 0, '2021-05-09 14:53:15', '2021-05-09 15:00:22'),
(3, 'product_3', 30, '', 3, 1, '2021-05-09 14:53:23', '2021-05-09 15:16:03'),
(4, 'product_4', 40, '', 0, 0, '2021-05-09 14:53:33', '2021-05-09 14:53:33'),
(5, 'product_5', 50, '', 0, 0, '2021-05-09 14:53:41', '2021-05-09 14:53:41'),
(6, 'product_6', 60, '', 0, 0, '2021-05-09 14:53:49', '2021-05-09 14:53:49'),
(7, 'product_7', 70, 'it is description', 0, 0, '2021-05-09 14:54:10', '2021-05-09 14:54:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
